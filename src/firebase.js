import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT0R8t33anItfe0ZYinN4QiUH2ny8vdHQ",
  authDomain: "clone-617cc.firebaseapp.com",
  databaseURL: "https://clone-617cc.firebaseio.com",
  projectId: "clone-617cc",
  storageBucket: "clone-617cc.appspot.com",
  messagingSenderId: "302267729678",
  appId: "1:302267729678:web:3d4b94626cfeeaf568b95f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
