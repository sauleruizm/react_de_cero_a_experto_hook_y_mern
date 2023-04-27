// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3BeCvCRUky4mOrc-fpHQr9RrGxfDQRDA",
  authDomain: "react-cursos-2c739.firebaseapp.com",
  projectId: "react-cursos-2c739",
  storageBucket: "react-cursos-2c739.appspot.com",
  messagingSenderId: "278136743641",
  appId: "1:278136743641:web:149602e46cccacf6be40c8",
  measurementId: "G-3KWE54CG6X"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );