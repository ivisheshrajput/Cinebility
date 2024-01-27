// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgg-dKhfAIEjuwopZ0se4lo6-MIsIwmM",
  authDomain: "cinebility.firebaseapp.com",
  projectId: "cinebility",
  storageBucket: "cinebility.appspot.com",
  messagingSenderId: "825758591850",
  appId: "1:825758591850:web:50372d04b640f09c561313",
  measurementId: "G-9TFMNFFMWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
