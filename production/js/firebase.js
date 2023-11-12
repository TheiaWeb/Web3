document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    const now = new Date();
    const timestamp = now.toString();
  
    // Get the email input value
    const email = document.getElementById('emailInput').value;
    
    // Extract the first word from the email
    const firstWord = email.split('@')[0].toLowerCase(); // Assuming the email contains only letters and spaces
  
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("newsletterForm").reset();
  
    // Add the user to the Firestore collection with the document named based on the first word in the email
    db.collection('users').doc(firstWord).set({
        email: email,
        subscribedToMailingList : true,
        timestamp: timestamp,
    })
    .then(() => {
        console.log('Document written with ID');
        
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
    });
  });
  