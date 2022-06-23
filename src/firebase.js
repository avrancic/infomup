import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCvJLZewqkgs5XT9l-F720ckD9AqoD2csQ",
    authDomain: "infomup-80dd3.firebaseapp.com",
    projectId: "infomup-80dd3",
    storageBucket: "infomup-80dd3.appspot.com",
    messagingSenderId: "227836827947",
    appId: "1:227836827947:web:4acaa3e5bc99e4d71b0d6e"
  };
  
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };