(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector('.locmodal-open-btn'),
    closeModalBtn: document.querySelector('.locmodal-close-btn'),
    modal: document.querySelector('.locmodal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  }
})();
