(() => {
  const refs = {
    body: document.body,
    openDescriptionBtn: document.querySelector('.products__open-btn'),
    closeDescriptionBtn: document.querySelector('.products__close-btn'),
    description: document.querySelector('.description'),
  };
  console.log(refs);
  refs.openDescriptionBtn.addEventListener('click', toggleDescription);
  refs.closeDescriptionBtn.addEventListener('click', toggleDescription);

  function toggleDescription() {
    refs.body.classList.toggle('no-scroll');
    refs.description.classList.toggle('not-visible');
  }
})();
