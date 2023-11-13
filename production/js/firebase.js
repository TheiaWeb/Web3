import {db} from './firebase-config.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

const addUserToNewsletter = async (email, firstWord, timestamp) => {
    await setDoc(doc(db, 'users', firstWord), {
      email: email,
      subscribedToMailingList: true,
      timestamp: timestamp
    });
  };
  
  export { addUserToNewsletter };