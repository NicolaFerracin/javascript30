(function() {
  let startingTimestamp = 0;
  let log = [];
  let isReplaying = false;

  function init() {
    log = [];
    isReplaying = false;
  }

  document.addEventListener('keydown', keydown);

  const drumItems = document.querySelectorAll('.drum-item');
  drumItems.forEach(item => item.addEventListener('transitionend', transitionend));

  function keydown(e) {
    const keyCode = e.keyCode;
    playKey(keyCode);
  }

  function playKey(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const drumItem = document.querySelector(`[data-key="${key}"]`);
    if (audio && drumItem) {
      if (!isReplaying) {
        addLogEntry(key);
      }
      audio.currentTime = 0;
      audio.play();
      drumItem.classList.add('active');
    }
  }

  function transitionend() {
    this.classList.remove('active');
  }

  function addLogEntry(key) {
    let newEntry = {};
    if (log.length === 0) {
      newEntry = {timestamp: 0, key: key};
      startingTimestamp = new Date().getTime();
    } else {
      newEntry = {timestamp: new Date().getTime() - startingTimestamp, key: key};
    }
    log.push(newEntry);
  }

  document.replay = () => {
    isReplaying = true;
    log.forEach((entry, index) => {
      setTimeout(() => {
        playKey(entry.key);
        if (index === log.length - 1) {
          init();
        }
      }, entry.timestamp)
    });
  }
}())
