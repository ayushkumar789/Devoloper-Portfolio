// lib/firebase.ts

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your corrected Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCFn-DO9xmI73JtH5v_vmH3ugUryjX2FvE",
    authDomain: "ayush-portfolio-ff70d.firebaseapp.com",
    projectId: "ayush-portfolio-ff70d",
    storageBucket: "ayush-portfolio-ff70d.appspot.com",  // fixed this line
    messagingSenderId: "1065759863536",
    appId: "1:1065759863536:web:c7b15950d54ed5d0cb8835",
    measurementId: "G-5KZZ83NSSG" // safe to keep, not required
};

// ✅ Prevent re-initialization during hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Get Firestore DB instance
const db = getFirestore(app);

export { db };
