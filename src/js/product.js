(() => {
  const refs = {
    body: document.body,
    openProductBtn1: document.querySelector('.products__open-btn1'),
    closeProductBtn1: document.querySelector('.products__close-btn1'),
    openProductBtn2: document.querySelector('.products__open-btn2'),
    closeProductBtn2: document.querySelector('.products__close-btn2'),
    openProductBtn3: document.querySelector('.products__open-btn3'),
    closeProductBtn3: document.querySelector('.products__close-btn3'),
    product1: document.querySelector('.product'),
    product2: document.querySelector('.product2'),
    product3: document.querySelector('.product3'),
  };

  console.log(refs);
  refs.openProductBtn1.addEventListener('click', toggleProduct1);
  refs.closeProductBtn1.addEventListener('click', toggleProduct1);
  refs.openProductBtn2.addEventListener('click', toggleProduct2);
  refs.closeProductBtn2.addEventListener('click', toggleProduct2);
  refs.openProductBtn3.addEventListener('click', toggleProduct3);
  refs.closeProductBtn3.addEventListener('click', toggleProduct3);

  function toggleProduct1() {
    refs.body.classList.toggle('no-scroll');
    refs.product1.classList.toggle('not-visible');
  }
  function toggleProduct2() {
    refs.body.classList.toggle('no-scroll');
    refs.product2.classList.toggle('not-visible');
  }
  function toggleProduct3() {
    refs.body.classList.toggle('no-scroll');
    refs.product3.classList.toggle('not-visible');
  }
})();
