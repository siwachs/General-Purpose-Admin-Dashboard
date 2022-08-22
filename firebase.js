import { initializeApp, getApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "admin-dashboard-3ab43.firebaseapp.com",
  projectId: "admin-dashboard-3ab43",
  storageBucket: "admin-dashboard-3ab43.appspot.com",
  messagingSenderId: "438595042924",
  appId: "1:438595042924:web:b6358c892b11130d516249",
};

// Initialize Firebase using Singleton pattern
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
export {};
