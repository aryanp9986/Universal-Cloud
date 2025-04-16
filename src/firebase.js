import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvxNG2sVDl0OXIQnB9EBrB8sTc5tiTG8c",
  authDomain: "universal-cloud-a148f.firebaseapp.com",
  projectId: "universal-cloud-a148f",
  storageBucket: "universal-cloud-a148f.firebasestorage.app",
  messagingSenderId: "870824795999",
  appId: "1:870824795999:web:5dbf9c304b246113f6e0ea"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, db, googleProvider };