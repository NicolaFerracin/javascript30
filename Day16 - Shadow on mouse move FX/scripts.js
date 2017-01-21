const title = document.querySelector('.hero h1');
const maxShadowMove = 50;

document.addEventListener('mousemove', moveShadow);

function moveShadow(e) {
  const { x: x, y: y } = e;
  const { innerWidth: maxX, innerHeight: maxY } = window;
  const shadowX = Math.round(x * maxShadowMove / maxX - maxShadowMove / 2);
  const shadowY = Math.round(y * maxShadowMove / maxY - maxShadowMove / 2);

  title.style.textShadow = `${shadowX}px ${shadowY}px #FF2E63, ${shadowX * -1}px ${shadowY * -1}px #EAEAEA`;
  title.style.boxShadow = title.style.textShadow;
}
