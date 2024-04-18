// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4olx4wcyJuPrrFrHfauGGo1q6cHP7vCE",
  authDomain: "meuapp-304be.firebaseapp.com",
  projectId: "meuapp-304be",
  storageBucket: "meuapp-304be.appspot.com",
  messagingSenderId: "1048134504515",
  appId: "1:1048134504515:web:3ff08314c785b1cb1084f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
