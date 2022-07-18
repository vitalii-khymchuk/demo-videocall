(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector('.video-open-btn'),
    closeMenuBtn: document.querySelector('.video-close-btn'),
    video: document.querySelector('.about__video'),
    hide11: document.querySelector('.hide11'),
    hide12: document.querySelector('.hide12'),
    hide13: document.querySelector('.hide13'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.video.classList.toggle('not-visible');
    refs.hide11.classList.toggle('not-visible');
    refs.hide12.classList.toggle('not-visible');
    refs.hide13.classList.toggle('not-visible');
  }
})();
