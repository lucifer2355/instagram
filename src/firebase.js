import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWs86SjRytWCNqBehlacslmr2F2FF4wxM",
  authDomain: "instagram-d25cb.firebaseapp.com",
  databaseURL: "https://instagram-d25cb.firebaseio.com",
  projectId: "instagram-d25cb",
  storageBucket: "instagram-d25cb.appspot.com",
  messagingSenderId: "618026277386",
  appId: "1:618026277386:web:d09f8caf5191fb2a1c1df3",
  measurementId: "G-8XG067DYJM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
