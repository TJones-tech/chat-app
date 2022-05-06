import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTCLkRu7RClTbjse9t7wspCdpGz54soQA",
  authDomain: "chat-app-dad8d.firebaseapp.com",
  projectId: "chat-app-dad8d",
  storageBucket: "chat-app-dad8d.appspot.com",
  messagingSenderId: "159441116821",
  appId: "1:159441116821:web:f2b55673a8f6ecc286859c",
  measurementId: "G-8ZYCC83HZG"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };