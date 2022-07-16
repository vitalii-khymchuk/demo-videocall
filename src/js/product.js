(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector('.products__open-btn'),
    closeMenuBtn: document.querySelector('.products__close-btn'),
    menu: document.querySelector('.product'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('not-visible');
  }
})();
