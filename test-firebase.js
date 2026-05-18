import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqaKVdofO-7qVG4Rm84NFXStzroiYPn5Y",
  authDomain: "campus-bidding.firebaseapp.com",
  projectId: "campus-bidding",
  storageBucket: "campus-bidding.firebasestorage.app",
  messagingSenderId: "838646645565",
  appId: "1:838646645565:web:85637a8b5205bd87c73b54",
  measurementId: "G-NFY3JW5Z4W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  try {
    const docRef = await addDoc(collection(db, "items"), {
      title: "Test Item",
      description: "Test Description",
      image: "Test Image",
      category: "Art",
      startPrice: 100,
      reservePrice: 200,
      duration: 24,
      endsAt: new Date(),
      createdAt: serverTimestamp(),
      currentBid: 100,
      bidCount: 0,
      status: "active",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e.message);
  }
}

test();
