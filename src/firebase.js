// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDd8pZBl1w-Gy1W6iDAfd0QpRFML9EYww0",
    authDomain: "kaiwa-4f1d2.firebaseapp.com",
    projectId: "kaiwa-4f1d2",
    storageBucket: "kaiwa-4f1d2.appspot.com",
    messagingSenderId: "729772185132",
    appId: "1:729772185132:web:d1beeb727424d31e95a389",
    measurementId: "G-SJ8Z640ZCS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
