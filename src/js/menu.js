(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector('.header__mobile-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
    closeMenuBtn1: document.querySelector('.close-menu-item-1'),
    closeMenuBtn2: document.querySelector('.close-menu-item-2'),
    closeMenuBtn3: document.querySelector('.close-menu-item-3'),
    closeMenuBtn4: document.querySelector('.close-menu-item-4'),
    closeMenuBtn5: document.querySelector('.close-menu-item-5'),
    menu: document.querySelector('.mobile-menu'),
    hide: document.querySelector('.hide'),
    hide2: document.querySelector('.hide2'),
    hide3: document.querySelector('.hide3'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn1.addEventListener('click', toggleMenu);
  refs.closeMenuBtn2.addEventListener('click', toggleMenu);
  refs.closeMenuBtn3.addEventListener('click', toggleMenu);
  refs.closeMenuBtn4.addEventListener('click', toggleMenu);
  refs.closeMenuBtn5.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('not-visible');
    refs.hide.classList.toggle('is-hidden');
    refs.hide2.classList.toggle('is-hidden');
    refs.hide3.classList.toggle('is-hidden');
  }
})();
