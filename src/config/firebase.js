// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Use environment variables for Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEMzq4Vbkq0M4kcPOGqDvoeTVdDn66Cs",
  authDomain: "amin-6deda.firebaseapp.com",
  projectId: "amin-6deda",
  storageBucket: "amin-6deda.appspot.com",
  messagingSenderId: "793149885090",
  appId: "1:793149885090:web:c6c158c1a6965d5d4e65fb",
  measurementId: "G-MXEBPMXEZ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
