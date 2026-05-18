import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
export const db = getFirestore(app);