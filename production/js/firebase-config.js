
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
//   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDB4BfdCWo9fHb4rC2YZl5gOgtikxQHi5g",
    authDomain: "formtheia.firebaseapp.com",
    databaseURL: "https://formtheia-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "formtheia",
    storageBucket: "formtheia.appspot.com",
    messagingSenderId: "335132907653",
    appId: "1:335132907653:web:d4620962ca0a24131571ec",
    measurementId: "G-5F4K9SXY34"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();