const navItems = document.querySelectorAll('nav > ul > li');
const highlight = document.querySelector('.highlight');

navItems.forEach(navItem => navItem.addEventListener('mouseenter', onMouseEnter));
navItems.forEach(navItem => navItem.addEventListener('mouseleave', onMouseLeave));

function onMouseEnter() {
  const dropdown = this.querySelector('.dropdown');
  dropdown.classList.add('visible');
  setTimeout(() => dropdown.classList.add('active'), 150);
  const linkCoords = dropdown.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.classList.add('open');
  highlight.style.height = `${coords.height}px` ;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function onMouseLeave() {
  const dropdown = this.querySelector('.dropdown');
  dropdown.classList.remove('visible', 'active');
  const linkCoords = dropdown.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.classList.remove('open');
  highlight.style.height = `${coords.height}px` ;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}
