const container = document.querySelector('.items');
const items = document.querySelectorAll('.items .item');
let isDown = false;
let startY;
let scrollTop;

container.addEventListener('mousedown', activate);
container.addEventListener('mouseup', deactivate);
container.addEventListener('mouseleave', deactivate);
container.addEventListener('mousemove', scroll);

function activate(e) {
  startY = e.pageY;
  scrollTop = container.scrollTop;
  isDown = true;
  container.classList.add('active');
  items.forEach(item => item.classList.add('active'));
}

function deactivate() {
  isDown = false;
  container.classList.remove('active');
  items.forEach(item => item.classList.remove('active'));
}

function scroll(e) {
  if (isDown) {
    e.preventDefault();
    const y = e.pageY;
    container.scrollTop = scrollTop + (startY - y) * 2;
  }
}
