// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8kGwcVeYbvpQAQF57me1wlVsm1fHqZU0",
  authDomain: "teste-banco-af1cd.firebaseapp.com",
  projectId: "teste-banco-af1cd",
  storageBucket: "teste-banco-af1cd.appspot.com",
  messagingSenderId: "872434960672",
  appId: "1:872434960672:web:9dc1b219e199b919d72f45",
  measurementId: "G-894VZE2GE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };