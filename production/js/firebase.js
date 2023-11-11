import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs,addDoc, collection } from "https://www.gstatic.com/firebasejs/10.6/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const Firestore = getFirestore(app);

  const text = document.getElementById('newsletter-send');
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Get the email input value
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
  
    // Get current timestamp
    const now = new Date();
    const timestamp = now.toString();
  
    // Create data object
    const newsletterData = {
      email: email,
      timestamp: timestamp,
    };
  
    try {
      // Save data to Firestore or perform your desired action here
      text.style.opacity = 1;
      
      const docRef = await addDoc(collection(Firestore, 'newsletterSubscriptions'), newsletterData);
      console.log('Email saved:', email);
      newsletterForm.reset(); // Optional: Reset the form after submission
      setTimeout(() => {
        text.style.opacity = 0;
      }, 3000);
    } catch (error) {
      console.error('Error saving email:', error);
    }
  });