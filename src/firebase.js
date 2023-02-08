// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxf6vhioJU239Ls8HXCAM_nWdVSL0kTZw",
  authDomain: "medlista-24ea2.firebaseapp.com",
  projectId: "medlista-24ea2",
  storageBucket: "medlista-24ea2.appspot.com",
  messagingSenderId: "316722784360",
  appId: "1:316722784360:web:eb621cf7440e75e76573dd",
  measurementId: "G-WMHGSC68L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
