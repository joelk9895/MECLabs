import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZezFsEooDyUjhMmrn7yUSg25rEEiz2Rg",
  authDomain: "videocalling-a36e4.firebaseapp.com",
  projectId: "videocalling-a36e4",
  storageBucket: "videocalling-a36e4.appspot.com",
  messagingSenderId: "545534764365",
  appId: "1:545534764365:web:cba207a7fd45f20ad9c304",
  measurementId: "G-RKJZLWGWKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};