
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvAbH3KV_C9TCrFHhBj4FIDVz9ImQSjjQ",
  authDomain: "ecommerce-73860-162f8.firebaseapp.com",
  projectId: "ecommerce-73860-162f8",
  storageBucket: "ecommerce-73860-162f8.firebasestorage.app",
  messagingSenderId: "1027224098057",
  appId: "1:1027224098057:web:a283a3a7b9e70ab9afafd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

export default db;