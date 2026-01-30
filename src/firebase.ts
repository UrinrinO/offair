// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Ra9VYK5SB_S6zC9wQFZKJKwTEBm7TO8",
  authDomain: "offair.firebaseapp.com",
  projectId: "offair",
  storageBucket: "offair.firebasestorage.app",
  messagingSenderId: "226525788995",
  appId: "1:226525788995:web:32556c07661e8950954df6",
  measurementId: "G-KE855LFJWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
