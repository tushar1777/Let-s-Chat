import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtdu_6jrvbm5turSE3-x55Mc6ENEH9ZWk",
    authDomain: "let-s-chat-2ce1f.firebaseapp.com",
    projectId: "let-s-chat-2ce1f",
    storageBucket: "let-s-chat-2ce1f.appspot.com",
    messagingSenderId: "619395828429",
    appId: "1:619395828429:web:0aa604801fc2e24e0cf784"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
