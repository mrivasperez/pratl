// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiVEbCVwlKLNcMYIW9liWUjnHky6eq5xM",
  authDomain: "pratl-17d05.firebaseapp.com",
  projectId: "pratl-17d05",
  storageBucket: "pratl-17d05.appspot.com",
  messagingSenderId: "798644211231",
  appId: "1:798644211231:web:ef9d851dbaa3e089698f2a",
  measurementId: "G-JWB6M0P2ZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

//authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
