const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const navOffsetTop = nav.offsetTop;

function scroll() {
  if (window.scrollY >= navOffsetTop) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    nav.classList.add('fixed');
  } else {
  document.body.style.paddingTop = '0px';
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', scroll);
