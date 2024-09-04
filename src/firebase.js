import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC3DF-zLK0uaLJ312JrPHG8Oq3pRA7ba6g",
  authDomain: "navigo-board-6dd49.firebaseapp.com",
  projectId: "navigo-board-6dd49",
  storageBucket: "navigo-board-6dd49.appspot.com",
  messagingSenderId: "353492784934",
  appId: "1:353492784934:web:8fb7772a95b7a13e10d3e7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);
