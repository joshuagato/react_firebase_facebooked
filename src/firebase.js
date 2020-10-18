import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMh0br8QmJZEaaBtbjPF2b6FzMoS3F8o",
  authDomain: "joga-facebooked.firebaseapp.com",
  databaseURL: "https://joga-facebooked.firebaseio.com",
  projectId: "joga-facebooked",
  storageBucket: "joga-facebooked.appspot.com",
  messagingSenderId: "547958834015",
  appId: "1:547958834015:web:5c2d19beca7d52a24d6cea",
  measurementId: "G-4XETTEFBPP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
