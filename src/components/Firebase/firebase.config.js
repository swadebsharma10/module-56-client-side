// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDildIU5Xvy_UNBf60fgrlbrvr7rDKpV-A",
  authDomain: "coffee-store-f8e32.firebaseapp.com",
  projectId: "coffee-store-f8e32",
  storageBucket: "coffee-store-f8e32.appspot.com",
  messagingSenderId: "321653030450",
  appId: "1:321653030450:web:55ad1fb3c8376bf813062b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;