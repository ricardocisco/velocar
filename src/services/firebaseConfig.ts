// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5OeT6ELLV3IwKeGBja1hT1cE5g4fXigU",
  authDomain: "react-auth-29071.firebaseapp.com",
  projectId: "react-auth-29071",
  storageBucket: "react-auth-29071.appspot.com",
  messagingSenderId: "464620833124",
  appId: "1:464620833124:web:ca5a0ec4a52451e4105271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
