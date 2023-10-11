import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9Q5IvOlJFk3XvV4wWZt5GFG8FEyuSnCU",
    authDomain: "app-fridas.firebaseapp.com",
    projectId: "app-fridas",
    storageBucket: "app-fridas.appspot.com",
    messagingSenderId: "1061782297733",
    appId: "1:1061782297733:web:6e0ba6bc5c69ef78451dec"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);