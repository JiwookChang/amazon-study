import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHuxwC9chxzjbV3sWvWfEdry26cS-PIck",
    authDomain: "clone-b0fe8.firebaseapp.com",
    projectId: "clone-b0fe8",
    storageBucket: "clone-b0fe8.appspot.com",
    messagingSenderId: "1538928508",
    appId: "1:1538928508:web:4a52ec534e33a0fc503ef9",
    measurementId: "G-HKTVD9KBFE"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };