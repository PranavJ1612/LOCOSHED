import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPF8YeviP5cYchv9GjhefXxNqDpfN76po",
  authDomain: "locoshedsystem-32148.firebaseapp.com",
  projectId: "locoshedsystem-32148",
  storageBucket: "locoshedsystem-32148.appspot.com",
  messagingSenderId: "1021444815203",
  appId: "1:1021444815203:web:42fb1cdb11e350e27f3b56"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);