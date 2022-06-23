import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvJLZewqkgs5XT9l-F720ckD9AqoD2csQ",
    authDomain: "infomup-80dd3.firebaseapp.com",
    projectId: "infomup-80dd3",
    storageBucket: "infomup-80dd3.appspot.com",
    messagingSenderId: "227836827947",
    appId: "1:227836827947:web:4acaa3e5bc99e4d71b0d6e"
  };  

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };