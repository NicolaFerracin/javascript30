const planets = document.querySelectorAll('.planet');
planets.forEach(planet => planet.addEventListener('click', openPlanet));
planets.forEach(planet => planet.addEventListener('transitionend', showPlanetName));

function openPlanet() {
  this.classList.toggle('open');
}

function showPlanetName(e) {
  if (e.propertyName.includes('flex') && this.classList.contains('open')) {
    this.classList.add('active');
  } else {
    this.classList.remove('active');
  }
}
