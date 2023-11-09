//#region TOGGLE MENU
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const burgerIconSrc = 'img/navbar-burger.png';
    const closeIconSrc = 'img/navbar-close.png';
  
    if (menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
      menuIcon.src = burgerIconSrc;
    } else {
      menu.classList.add('menu-open');
      menuIcon.src = closeIconSrc;
    }
  }
  //#endregion