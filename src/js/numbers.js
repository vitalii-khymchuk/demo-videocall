  const time = 10000;
  const step = 10;
  
  function outNum(num, elem) {
    let e = document.querySelector("#out");
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      e.innerHTML = n;
    }, t);
  }
  
  outNum(721, "#out");
  
 