const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score');
const ratio = document.querySelector('.ratio');
document.querySelectorAll('.mole').forEach(mole => mole.addEventListener('click', hit));
let lastRandom;
let gameOver = true;
let counter = 0;

function getRandomNumber(min, max) {
   const random = Math.round(Math.random() * (max - min) + min);
   if (lastRandom === random) {
     getRandomNumber(min, max);
   }
   lastRandom = random;
   return random;
}

function peep() {
  const hole = holes[getRandomNumber(0, holes.length - 1)];
  const timeUp = getRandomNumber(200, 1000);
  hole.classList.add('up');
  counter++;
  setTimeout(() => {
    hole.classList.remove('up')
    if (!gameOver) {
      peep();
    } else {
      ratio.innerHTML = `You hit ${Math.round(Number(score.innerHTML) * 100 / counter)}% of the moles! (${score.innerHTML}/${counter})`;
    }
  }, timeUp);
}

function hit(e) {
  if (e.isTrusted) {
    score.innerHTML = Number(score.innerHTML) + 1;
  }
  this.offsetParent.classList.remove('up');
}

document.startGame = function() {
  counter = 0;
  gameOver = false;
  score.innerHTML = '0';
  ratio.innerHTML = '';
  peep();
  setTimeout(() => gameOver = true, 10000);
}
