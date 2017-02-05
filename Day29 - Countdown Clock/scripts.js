const presetTimes = document.querySelectorAll('nav li');
const clock = document.querySelector('.countdown .clock');
const customTime = document.querySelectorAll('.inputs input');
presetTimes.forEach(time => time.addEventListener('click', addTime));
let countdownTime = 0;
let countdown;
let isCounting = false;

const hour = 3600;
const minute = 60;

function addTime() {
  countdownTime += Number(this.dataset.time);
  setTime();
}

function setTime() {
  const time = countdownTime;
  const hours = Math.floor(time / hour);
  const minutes = Math.floor((time - hours * hour) / minute);
  const seconds = Math.floor(time - hours * hour - minutes * minute);
  const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  clock.innerHTML = timeString;
  document.title = timeString;
  if (!isCounting) {
    startTimer();
  }
}

function startTimer() {
  clock.classList.remove('timeup');
  isCounting = true;
  const startTime = Date.now();
  const finishTime = startTime + countdownTime * 1000;
  countdown = setInterval(() => {
    if (countdownTime <= 1) {
      document.resetTime();
    } else {
      countdownTime = Math.round((finishTime - Date.now()) / 1000);
      setTime();
    }
  }, 1000);
}

document.resetTime = function() {
  clearInterval(countdown);
  clock.innerHTML = '00:00:00';
  document.title = '00:00:00';
  countdownTime = 0;
  isCounting = false;
  clock.classList.add('timeup');
}

document.addCustomTime = function() {
  customTime.forEach(time => {
    countdownTime += time.value * time.dataset.multi
    time.value = '';
  });
  setTime();
}
