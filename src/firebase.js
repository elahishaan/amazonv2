import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPMMuLCeEicy0QaAXZ7X36i3IxxylpOM4",
  authDomain: "v2-497e4.firebaseapp.com",
  projectId: "v2-497e4",
  storageBucket: "v2-497e4.appspot.com",
  messagingSenderId: "1042380409040",
  appId: "1:1042380409040:web:e02736dd9f5db77c2a36d5",
  measurementId: "G-DP6CW05TYM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
