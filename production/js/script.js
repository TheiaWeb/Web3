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

