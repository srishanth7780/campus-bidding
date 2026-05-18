import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { MOCK_USERS, jwtUtils, cookieUtils } from "../constants";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser]         = useState(null);
  const [items, setItems]       = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const stored = localStorage.getItem("bv_watchlist");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });
  const [notifications, setNotifications] = useState([]);

  // Fetch items from Firebase
  useEffect(() => {
    const q = query(collection(db, "items"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fbItems = snapshot.docs.map(doc => {
        const data = doc.data();
        let endsAtTime = data.endsAt;
        if (endsAtTime && typeof endsAtTime.toMillis === "function") {
          endsAtTime = endsAtTime.toMillis();
        } else if (endsAtTime instanceof Date) {
          endsAtTime = endsAtTime.getTime();
        } else if (typeof endsAtTime === "string") {
          endsAtTime = new Date(endsAtTime).getTime();
        } else if (typeof endsAtTime === "number") {
          // already a timestamp
        } else {
          endsAtTime = Date.now();
        }
        
        return {
          id: doc.id,
          bids: [], // Default empty array for legacy items
          ...data,
          endsAt: endsAtTime,
        };
      });
      setItems(fbItems);
    });
    return () => unsubscribe();
  }, []);

  // Sync watchlist → localStorage
  useEffect(() => {
    localStorage.setItem("bv_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Restore session from cookie on mount
  useEffect(() => {
    const token = cookieUtils.get("bv_token");
    if (token && jwtUtils.verify(token)) {
      const payload = jwtUtils.decode(token);
      const found = MOCK_USERS.find(u => u.id === payload.id);
      if (found) setUser({ ...found });
    }
  }, []);

  // Mark expired items as sold
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev =>
        prev.map(item =>
          !item.sold && item.endsAt < Date.now()
            ? { ...item, sold: true }
            : item
        )
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addNotification = useCallback((msg, type = "info") => {
    const id = uuidv4();
    setNotifications(prev => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  }, []);

  const toggleWatchlist = useCallback((itemId) => {
    setWatchlist(prev => {
      const next = prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId];
      addNotification(
        next.includes(itemId)
          ? "Added item to your watchlist."
          : "Removed item from your watchlist.",
        "info"
      );
      return next;
    });
  }, [addNotification]);

  const login = useCallback((username, password) => {
    const found = MOCK_USERS.find(u => u.username === username && u.password === password);
    if (!found) return false;
    const token = jwtUtils.encode({ id: found.id, username: found.username, role: found.role });
    cookieUtils.set("bv_token", token);
    setUser({ ...found });
    addNotification(`Welcome back, ${found.username}! 👋`, "success");
    return true;
  }, [addNotification]);

  const logout = useCallback(() => {
    cookieUtils.delete("bv_token");
    setUser(null);
    addNotification("Logged out successfully.", "info");
  }, [addNotification]);

  const addItem = useCallback((itemData) => {
    // This is now handled directly by AddItemPage.jsx writing to Firebase
  }, []);

  const placeBid = useCallback(async (itemId, amount) => {
    if (!user) return false;
    const item = items.find(i => i.id === itemId);
    if (!item || amount <= item.currentBid || item.sold) return false;
    
    try {
      const itemRef = doc(db, "items", itemId);
      const newBid = { bidder: user.username, amount, time: Date.now() };
      await updateDoc(itemRef, {
        currentBid: amount,
        bids: [...(item.bids || []), newBid]
      });
      addNotification(`Bid of $${amount.toLocaleString()} placed!`, "success");
      return true;
    } catch (e) {
      console.error(e);
      addNotification(`Failed to place bid`, "error");
      return false;
    }
  }, [user, items, addNotification]);

  const value = useMemo(() => ({
    user, items, notifications, watchlist,
    login, logout, addItem, placeBid, toggleWatchlist, addNotification,
  }), [user, items, notifications, watchlist, login, logout, addItem, placeBid, toggleWatchlist, addNotification]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
