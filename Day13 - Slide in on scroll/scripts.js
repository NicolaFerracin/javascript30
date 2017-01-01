(function() {
  let lastRun = 0;
  const images = document.querySelectorAll('img');
  window.addEventListener('scroll', debounce(checkSlide, 200));

  function debounce(fn, debounceTime) {
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRun || new Date().getTime() - lastRun >= debounceTime) {
        fn.apply(context, args);
        lastRun = new Date().getTime();
      }
    }
  }

  function checkSlide() {
    images.forEach(img => {
      const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
      const slideOutAt = img.offsetTop + img.height;
      const isHalfwayThroughImg = slideInAt > img.offsetTop;
      const isPastImg = window.scrollY > slideOutAt;
      if (isHalfwayThroughImg && !isPastImg) {
        img.classList.add('visible');
      } else {
        img.classList.remove('visible');
      }
    });

  }
}());
