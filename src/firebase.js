// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp63aSyMyThNXbYtOmeHhvzn0vIyU5nSg",
  authDomain: "netflix-react-61713.firebaseapp.com",
  projectId: "netflix-react-61713",
  storageBucket: "netflix-react-61713.appspot.com",
  messagingSenderId: "4070085519",
  appId: "1:4070085519:web:a180d932ce594624e131fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
