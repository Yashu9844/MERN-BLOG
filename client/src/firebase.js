// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d0cb3.firebaseapp.com",
  projectId: "mern-blog-d0cb3",
  storageBucket: "mern-blog-d0cb3.appspot.com",
  messagingSenderId: "156533620274",
  appId: "1:156533620274:web:2f7b101dbe089e2676462b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);