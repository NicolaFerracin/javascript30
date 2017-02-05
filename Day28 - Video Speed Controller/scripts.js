const speedController = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const maxWidth = speedController.offsetWidth;
const video = document.querySelector('video');
let currentSpeed = 1;
const maxSpeed = 4;
const minSpeed = 0.5;

window.addEventListener('keydown', onKeyDown);
document.addEventListener('mousewheel', onMouseWheel);
speedController.addEventListener('mousemove', onMouseMove);

function onKeyDown(e) {
  if (e.keyCode === 39) {
    changeSpeed(1, 0.1);
  } else if (e.keyCode === 37) {
    changeSpeed(0, 0.1);
  }
}

function onMouseWheel(e) {
  if (e.deltaY < 0) {
    changeSpeed(1, 0.1);
  } else if (e.deltaY > 0) {
    changeSpeed(0, 0.1);
  }
}

function onMouseMove(e) {
  const newSpeed = e.offsetX * maxSpeed / maxWidth;
  if (newSpeed > minSpeed && newSpeed < maxSpeed) {
    const intensity = newSpeed - currentSpeed;
    if (intensity > 0) {
      changeSpeed(1, intensity);
    } else {
      changeSpeed(0, -intensity);
    }
  }
}

function changeSpeed(shouldSpeedUp, intensity) {
  if (shouldSpeedUp === 1 && currentSpeed < maxSpeed) {
    currentSpeed = Math.round((currentSpeed + intensity) * 10) / 10;
    updateSpeed();
  } else if (shouldSpeedUp === 0 && currentSpeed > minSpeed){
    currentSpeed = Math.round((currentSpeed - intensity) * 10) / 10;
    updateSpeed()
  }
}

function updateSpeed() {
  let newWidth = currentSpeed * 100 / maxSpeed;
  speedBar.style.width = `${newWidth}%`;
  speedBar.innerHTML = `${currentSpeed}x`;
  video.playbackRate = currentSpeed;
}
