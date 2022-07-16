(() => {
  const refs = {
    body: document.body,
    openProductBtn: document.querySelector('.products__open-btn1'),
    closeProductBtn: document.querySelector('.products__close-btn1'),
    openProductBtn: document.querySelector('.products__open-btn2'),
    closeProductBtn: document.querySelector('.products__close-btn2'),
    openProductBtn: document.querySelector('.products__open-btn3'),
    closeProductBtn: document.querySelector('.products__close-btn3'),
    product: document.querySelector('.product'),
  };
  console.log(refs);
  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.body.classList.toggle('no-scroll');
    refs.product.classList.toggle('not-visible');
  }
})();
