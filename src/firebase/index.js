import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyD5FCT7UFb6Upq4KW9djr1Sx3-ekJf8AXo",
    authDomain: "ics3u-c478c.firebaseapp.com",
    projectId: "ics3u-c478c",
    storageBucket: "ics3u-c478c.firebasestorage.app",
    messagingSenderId: "226770021469",
    appId: "1:226770021469:web:481f616008ffb3e381f1b4"
};

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };