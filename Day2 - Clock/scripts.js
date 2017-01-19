const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
const digitalClock = document.querySelector('.digital');
const timezones = [].slice.call(document.querySelector('.time-zones').children);
let timezone = '';

function init() {
  rotateHandsByDegrees([
    {
      hand: secondsHand,
      degrees: 270
    },
    {
      hand: minutesHand,
      degrees: 270
    },
    {
      hand: hoursHand,
      degrees: 270
    }
  ]);
  timezones.forEach(zone => zone.addEventListener('click', changeTimezone));
}

function rotateHandsByDegrees(handsWithDegrees) {
  handsWithDegrees.forEach(handWithDegrees => {
    handWithDegrees.hand.style.transform = `rotate(${handWithDegrees.degrees}deg)`;
  })
}

function setClock() {
  let now = new Date();
  if (timezone) {
    const timeOptions = new Date().toLocaleString('en-US', { timeZone: timezone });
    now = new Date(timeOptions);
  }
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 270;
  const minutesDegrees = (minutes / 60) * 360 + 270;
  const hoursDegrees = (hours / 12) * 360 + 270;
  rotateHandsByDegrees([
    { hand: secondsHand, degrees: secondsDegrees },
    { hand: minutesHand, degrees: minutesDegrees },
    { hand: hoursHand, degrees: hoursDegrees }
  ]);
  setDigitalClock([hours, minutes, seconds]);
}

function setDigitalClock(timeArr) {
  timeArr.forEach((item, index) => {
    if (item < 10) {
      timeArr[index] = '0' + item;
    } else {
      timeArr[index] = '' + item;
    }
  })
  digitalClock.innerText = timeArr.join(':');
}

function changeTimezone() {
  timezones.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
  timezone = this.dataset.timezone;
}

init();
setInterval(setClock, 1000);
