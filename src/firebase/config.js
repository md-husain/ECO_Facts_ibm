// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9c2Imi_AjNfBxkf6oe2qNNJAM8PHikYs",
  authDomain: "ecofactsauth.firebaseapp.com",
  projectId: "ecofactsauth",
  storageBucket: "ecofactsauth.firebasestorage.app",
  messagingSenderId: "220650482135",
  appId: "1:220650482135:web:dc0e9e9548357fc5200392",
  measurementId: "G-3R6H9F4F4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);