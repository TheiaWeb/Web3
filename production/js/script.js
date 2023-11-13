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

  //#region TOGGLE MENU
function initializeCookieBanner() {
  var banner = document.getElementById("cookieBanner");
  var arrow = document.querySelector(".cookie__box-arrow");
  var saveBtn = document.querySelector(".cookie__save-btn");

  function toggleCookiePanel() {
      banner.classList.toggle("expanded");
      arrow.classList.toggle("rotate");
  }

  arrow.addEventListener('click', function() {
      toggleCookiePanel();
  });

  saveBtn.addEventListener('click', function() {
      toggleCookiePanel(); // Ou saveCookiePreferences() si cette fonction doit toujours être appelée
  });

  window.addEventListener('click', function(e) {
      if (!banner.contains(e.target) && !arrow.contains(e.target) && banner.classList.contains("expanded")) {
          toggleCookiePanel();
      }
  });

  banner.addEventListener('click', function(e) {
      e.stopPropagation();
  });
}

document.addEventListener('DOMContentLoaded', initializeCookieBanner);

//#endregion


