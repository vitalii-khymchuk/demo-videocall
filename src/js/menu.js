(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector('.header__mobile-menu-btn'),
    closeMenuBtn: document.querySelector('.menu-mob__close-btn'),
    menu: document.querySelector('.mobile-menu'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('is-hidden');
  }
})();
