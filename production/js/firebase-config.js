
  // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
   import { getFirestore, doc, setDoc, addDoc, increment, getDoc  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
   import { getAuth } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'; // Import Firebase Authentication
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

const addUserToNewsletter = async (email, firstWord, timestamp) => {
    await setDoc(doc(db, 'users', firstWord), {
      email: email,
      subscribedToMailingList: true,
      timestamp: timestamp
    });
  };
  
  document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const firstWord = email.split('@')[0].toLowerCase();
    const now = new Date();
    const timestamp = now.toString();
  
    addUserToNewsletter(email, firstWord, timestamp)
      .then(() => {
        console.log('Document written with ID');
  
        // UI Success Handling
        document.getElementById('newsletter-send').style.display = 'block';
        setTimeout(() => {
          document.getElementById('newsletter-send').classList.add('hide');
          setTimeout(() => {
            document.getElementById('newsletter-send').style.display = 'none';
            document.getElementById('newsletter-send').classList.remove('hide');
          }, 500); // Assuming your CSS transition duration is 0.3 seconds
        }, 4000);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        // Handle error or UI updates here
      });
  
    document.getElementById("newsletterForm").reset();
    // Additional UI logic if needed
  });
  const saveSwitchStatuses = async (necessaryStatus, analyticsStatus) => {
    event.preventDefault();
    try {
      let count = 0;
      const now = new Date();
      const timestamp = now.toString();
      const fileName = `status_${count}`;
  
      // Get the current count from Firestore
      const docRef = doc(db, 'switches', 'count');
      const docSnapshot = await getDoc(docRef);
      
  
      if (docSnapshot.exists()) {
        count = docSnapshot.data().count;
      }
  
      // Save the data to Firestore
      await setDoc(doc(db, 'switches', fileName), {
        necessary: necessaryStatus,
        analytics: analyticsStatus,
        timestamp: timestamp,
        count: count,
      });
  
      // Increment the count in Firestore
      await setDoc(docRef, { count: increment(1) }, { merge: true });
  
      console.log('Switch statuses saved to Firestore.');
  
    } catch (error) {
      console.error('Error saving switch statuses:', error);
    }
    document.getElementById('cookie__box').style.display = 'none';
  };
  
  const saveButton = document.getElementById('save-button');
  
  saveButton.addEventListener('click', () => {
    const necessarySwitch = document.getElementById('Necessary-switch');
    const analyticsSwitch = document.getElementById('Analytics-switch');
  
    const necessaryStatus = necessarySwitch.checked;
    const analyticsStatus = analyticsSwitch.checked;
  
    saveSwitchStatuses(necessaryStatus, analyticsStatus);
  });