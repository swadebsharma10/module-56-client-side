// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhE79LE5Bzrlk5tujtdMdGzqI0YmDeoI",
  authDomain: "module-56-coffee-client.firebaseapp.com",
  projectId: "module-56-coffee-client",
  storageBucket: "module-56-coffee-client.appspot.com",
  messagingSenderId: "557769825263",
  appId: "1:557769825263:web:e5dd507aad8a994967341a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;