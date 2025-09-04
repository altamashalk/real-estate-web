// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM6n9BiLySA65m6M22QcgCmHT1VL01Xz4",
  authDomain: "real-estate-app-fe1b2.firebaseapp.com",
  projectId: "real-estate-app-fe1b2",
  storageBucket: "real-estate-app-fe1b2.appspot.com",
  messagingSenderId: "387431473399",
  appId: "1:387431473399:web:18c7139a3ccff853b8f3f2",
  measurementId: "G-09W4ZFXN3B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
