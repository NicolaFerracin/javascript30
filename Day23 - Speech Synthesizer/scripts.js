const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('#voices');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');

function populateVoices() {
  if (voicesDropdown.querySelectorAll('option').length > 1) {
    return;
  }
  voices = this.getVoices();
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.text =`${voice.name} (${voice.lang})`;
    option.value = voice.name;
    voicesDropdown.add(option, index);
  });
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function speak() {
  msg.text = document.querySelector('[name="text"]').value;
  speechSynthesis.speak(msg);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speak();
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
play.addEventListener('click', speak);
stop.addEventListener('click', toggle.bind(null, false));
options.forEach(option => option.addEventListener('change', setOption));
