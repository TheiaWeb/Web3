
  // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

//   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ZZaNR6jDI8vSazxAzHlHxMb1NRIbZfA",
  authDomain: "thirdweb-5b016.firebaseapp.com",
  projectId: "thirdweb-5b016",
  storageBucket: "thirdweb-5b016.appspot.com",
  messagingSenderId: "891972920996",
  appId: "1:891972920996:web:81999fb335b93dad77e831",
  measurementId: "G-TYRMLJ4GDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };