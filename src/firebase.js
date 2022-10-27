import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9-5aDpscv1YJnPNoPWQOhnWLrjqlIM88",
  authDomain: "notes-app-baef0.firebaseapp.com",
  projectId: "notes-app-baef0",
  storageBucket: "notes-app-baef0.appspot.com",
  messagingSenderId: "37290140430",
  appId: "1:37290140430:web:5b6d46af3718c62cc1ed5f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
