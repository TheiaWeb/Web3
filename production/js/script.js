//#region TOGGLE MENU
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const burgerIconSrc = 'img/navbar-burger.png';
    const closeIconSrc = 'img/navbar-close.png';
    const body = document.body;
  
    if (menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
      body.classList.remove('no-scroll');
      menuIcon.src = burgerIconSrc;
    } else {
      menu.classList.add('menu-open');
      body.classList.add('no-scroll');
      menuIcon.src = closeIconSrc;
    }
  }
  //#endregion

  // Your main JavaScript file
import { addUserToNewsletter } from './firebase.js';

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
