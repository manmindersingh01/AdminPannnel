// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDEXcreg5whqzn5TjqXTS0S5_ql3MCf1b0",
  authDomain: "admin-promo.firebaseapp.com",
  projectId: "admin-promo",
  storageBucket: "admin-promo.appspot.com",
  messagingSenderId: "375065318751",
  appId: "1:375065318751:web:94eb1853bd883b7cde12ea",
  measurementId: "G-HW14LEFKC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);