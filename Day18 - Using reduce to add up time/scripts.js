const videos = Array.from(document.querySelectorAll('li'));
const timeSpan = document.querySelector('#time');
const time = videos
.map(video => video.dataset.time)
.map(time => {
  const [mins, secs] = time.split(':').map(parseFloat);
  return mins * 60 + secs;
})
.reduce((total, secs) => total + secs);
const date = new Date(null);
date.setSeconds(time);
timeSpan.innerHTML = date.toUTCString().split(' ')[4];
