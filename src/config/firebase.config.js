// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBho9P2cumKJBDdphZ2M3zsVcfonXPO2dc",
  authDomain: "cleaning-c.firebaseapp.com",
  projectId: "cleaning-c",
  storageBucket: "cleaning-c.appspot.com",
  messagingSenderId: "5328414771",
  appId: "1:5328414771:web:68973cfbf8b9979ed7db46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;