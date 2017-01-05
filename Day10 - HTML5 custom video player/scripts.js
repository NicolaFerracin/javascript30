(function() {
  const video = document.querySelector('video');
  const videoCurrentTime = document.querySelector('.player-controls .video-current-time');
  const videoProgress = document.querySelector('.player-controls .video-time-full');
  const playButton = document.querySelector('.player-controls-bottom .video-play');
  const controlRanges = document.querySelectorAll('.player-controls-bottom input[type="range"]');
  const changeTimeButtons = document.querySelectorAll('.player-controls-bottom .video-change-time');
  const fullscreenButton = document.querySelector('.player-controls-bottom .video-fullscreen');
  let doubleClick = false;
  let videoDuration = video.duration;

  // events listeners
  videoProgress.addEventListener('click', changeVideoTime);
  playButton.addEventListener('click', playOrPause);
  fullscreenButton.addEventListener('click', toggleFullscreen);
  changeTimeButtons.forEach(button => button.addEventListener('click', changeVideoCurrentTime));
  controlRanges.forEach(range => range.addEventListener('change', changeVideoRange));
  video.addEventListener('timeupdate', updateProgressBar);
  video.addEventListener('click', onVideoClick);

  function changeVideoTime(e) {
    video.currentTime = e.offsetX / video.offsetWidth * video.duration;
    playVideo();
  }

  function updateProgressBar() {
    videoCurrentTime.style.width = video.currentTime * 100 / video.duration + '%';
  }

  function onVideoClick() {
    if (doubleClick) {
      toggleFullscreen();
    }
    playOrPause();
    doubleClick = true;
    setTimeout(function() {
      doubleClick = false;
    }, 300);
  };

  function playOrPause() {
    video.paused ? playVideo() : pauseVideo();
  }

  function changeVideoCurrentTime() {
    video.currentTime = video.currentTime + Number(this.dataset.change) || 0;
  }

  function toggleFullscreen() {
    video.classList.toggle('fullscreen');
  }

  function changeVideoRange() {
    video[this.name] = this.value / 100;
  }

  function playVideo() {
    video.play();
    playButton.innerHTML = '❚❚';
  }

  function pauseVideo() {
    video.pause();
    playButton.innerHTML = '►';
  }
}());
