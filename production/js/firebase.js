document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  const now = new Date();
  const timestamp = now.toString();

  // Get the email input value
  const email = document.getElementById('emailInput').value;
  event.preventDefault(); // Prevent the default form submission
  document.getElementById("newsletterForm").reset();
  // Add the user to the Firestore collection
  db.collection('users').add({
      email: email,
      timestamp: timestamp,
  })
  .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      
      document.getElementById('newsletter-send').style.display = 'block';
  })
  .catch((error) => {
      console.error('Error adding document: ', error);
  });
});
