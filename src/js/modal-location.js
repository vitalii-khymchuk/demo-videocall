(() => {
  const refs = {
    openModalBtn: document.querySelector('.locmodal-open-btn'),
    closeModalBtn: document.querySelector('.locmodal-close-btn'),
    modal: document.querySelector('.locmodal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
