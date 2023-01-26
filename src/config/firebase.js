// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCasrybI6ujGxv-DBFvxayE6-UsbEV5gAc",
  authDomain: "blog-a4e8d.firebaseapp.com",
  projectId: "blog-a4e8d",
  storageBucket: "blog-a4e8d.appspot.com",
  messagingSenderId: "11976842591",
  appId: "1:11976842591:web:752eb6fe48c5aaeb136aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();
