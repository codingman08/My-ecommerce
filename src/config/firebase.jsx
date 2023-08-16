import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBb997kdsOUAtB22JPyjh9flDs0eWS8now",
  authDomain: "myfirstproject-cf7e3.firebaseapp.com",
  projectId: "myfirstproject-cf7e3",
  storageBucket: "myfirstproject-cf7e3.appspot.com",
  messagingSenderId: "733185966373",
  appId: "1:733185966373:web:52dc2614e6d0bb4b7c9acc",
  measurementId: "G-RH88RLCBP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
