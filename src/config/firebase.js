import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth}from "firebase/auth"
require('dotenv').config();const firebaseConfig = {
  apiKey: process.env.API,
  authDomain:process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId:process.env.MESSAGERSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MESASURMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export  const provider = new GoogleAuthProvider()