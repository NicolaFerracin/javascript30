const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let strokeIncreaseDirection = true;
let isDrawing = false;
let [yStart, xStart, strokeWidth, hue] = [0, 0, 0, 0];
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', setIsDrawingToFalse);
canvas.addEventListener('mouseout', setIsDrawingToFalse);
canvas.addEventListener('mousemove', onMouseMove);

function onMouseDown(e) {
  [xStart, yStart, isDrawing, isMouseDown] = [e.offsetX, e.offsetY, true, true];
}

function setIsDrawingToFalse() {
  isDrawing = false;
}

function onMouseMove(e) {
  if (isDrawing) {
    draw(e.offsetX, e.offsetY);
  }
}

function draw(xEnd, yEnd) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  updateStrokeWidth();
  [xStart, yStart, ctx.lineWidth] = [xEnd, yEnd, strokeWidth];
  hue = (hue + 1) % 360;
}

function updateStrokeWidth() {
  if (strokeIncreaseDirection) {
    strokeWidth++;
  } else {
    strokeWidth--;
  }
  if (strokeWidth >= 100 || strokeWidth <= 0) {
    strokeIncreaseDirection = !strokeIncreaseDirection;
  }
}
