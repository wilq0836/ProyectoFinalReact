import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkvol7Tmg-GPG8xMYgoSWsu4H6Mde7f6E",
  authDomain: "bikestwogoproject.firebaseapp.com",
  projectId: "bikestwogoproject",
  storageBucket: "bikestwogoproject.appspot.com",
  messagingSenderId: "1010788344633",
  appId: "1:1010788344633:web:5d09b07186b9deedf73ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);