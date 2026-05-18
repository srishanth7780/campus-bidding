/* eslint-disable */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const LoginPage = () => {
  const { login, user } = useApp();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    await new Promise(r => setTimeout(r, 700));
    const ok = login(creds.username, creds.password);
    setLoading(false);
    if (!ok) setError("Invalid credentials.......");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
      <div className="float-anim" style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.15), transparent 70%)", top: "10%", left: "5%", pointerEvents: "none" }} />
      <div className="float-anim" style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,212,191,0.1), transparent 70%)", bottom: "15%", right: "8%", pointerEvents: "none", animationDelay: "2s" }} />
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", damping: 22 }} style={{ width: "100%", maxWidth: 440, padding: 32 }}>
        <div className="glass-strong" style={{ borderRadius: 28, padding: 40 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, margin: "0 auto 16px", background: "linear-gradient(135deg, #A78BFA, #2DD4BF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontFamily: "Syne", fontWeight: 800, boxShadow: "0 8px 32px rgba(167,139,250,0.3)" }}>B</div>
            <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 26 }}>Welcome to BidVault</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>Sign in to start bidding</p>
          </div>
          <div style={{ background: "rgba(45,212,191,0.07)", border: "1px solid rgba(45,212,191,0.2)", borderRadius: 12, padding: "12px 16px", marginBottom: 24, fontSize: 12, color: "#2DD4BF", lineHeight: 1.7 }}>
            <strong>Try your first Bid</strong>  / admin
          </div>
          {[
            { key: "username", label: "Username", type: "text", placeholder: "NAME" },
            { key: "password", label: "Password", type: "text", placeholder: "••••••••" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 7 }}>{f.label}</label>
              <input type={f.type} value={creds[f.key]} placeholder={f.placeholder}
                onChange={e => setCreds(prev => ({ ...prev, [f.key]: e.target.value }))}
                onKeyDown={e => e.key === "Enter" && handleLogin()} />
            </div>
          ))}
          {error && (
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              style={{ background: "rgba(251,113,133,0.08)", border: "1px solid rgba(251,113,133,0.25)", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#FB7185" }}>
              {error}
            </motion.div>
          )}
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleLogin} disabled={loading}
            style={{ width: "100%", padding: "14px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #A78BFA 0%, #2DD4BF 100%)", color: "#0B0D17", fontSize: 16, fontFamily: "Syne", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: 4 }}>
            {loading ? "Authenticating…" : "Sign In"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
