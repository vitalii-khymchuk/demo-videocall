(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector('.header__mobile-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
    menu: document.querySelector('.mobile-menu'),
    hide: document.querySelector('.hide'),
    hide2: document.querySelector('.hide2'),
    hide3: document.querySelector('.hide3'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('not-visible');
    refs.hide.classList.toggle('is-hidden');
    refs.hide2.classList.toggle('is-hidden');
    refs.hide3.classList.toggle('is-hidden');
  }
})();
