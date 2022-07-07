import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb7_hGPmv9NAcjNCWxQ835hMnZBe7IbAc",
  authDomain: "bitlo-b68fb.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "bitlo-b68fb",
  storageBucket: "bitlo-b68fb.appspot.com",
  messagingSenderId: "478566962347",
  appId: "1:478566962347:web:f4047d0bc80b69ffcbd3ee",
  measurementId: "G-SDEQF4G9JE",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

var db = app.firestore();

const auth = firebase.auth();

export { auth, db };
