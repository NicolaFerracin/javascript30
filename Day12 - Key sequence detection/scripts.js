(function() {
  document.addEventListener('keydown', registerKeydown);
  let keysPressed = [];
  const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  function registerKeydown(e) {
    keysPressed.push(e.key);
    keysPressed.splice(-konamiCode.length - 1, keysPressed.length - konamiCode.length);
    if (keysPressed.join('') === konamiCode.join('')) {
      cornify_add();
      keysPressed = [];
    }
  }
}());
