// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcCI0MtpP_zbwNyVxSqYvY8v8AeueUCNE",
    authDomain: "instagram-2-ee968.firebaseapp.com",
    projectId: "instagram-2-ee968",
    storageBucket: "instagram-2-ee968.appspot.com",
    messagingSenderId: "866964117003",
    appId: "1:866964117003:web:608649116d6b89acda590e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };