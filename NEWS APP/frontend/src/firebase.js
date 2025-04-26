// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "news3-fa86e.firebaseapp.com",
  projectId: "news3-fa86e",
  storageBucket: "news3-fa86e.firebasestorage.app",
  messagingSenderId: "112722703953",
  appId: "1:112722703953:web:8cf979984aa14e03712a70",
  measurementId: "G-V9LSW1GBSZ"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
