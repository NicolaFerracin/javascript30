(function() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const searchInput = document.querySelector('.search input');
  const results = document.querySelector('.search .results');
  const cities = [];
  
  fetch(endpoint).then(data => data.json()).then(result => cities.push(...result));
  searchInput.addEventListener('keyup', displayResult);

  function displayResult() {
    const filteredCities = searchByWord(this.value, cities);
    let html = '';
    const regex = new RegExp(this.value, 'gi');
    filteredCities.forEach(filteredCity => {
      const city = filteredCity.city.replace(regex, `<span class="highlighted">${this.value}</span>`);
      const state = filteredCity.state.replace(regex, `<span class="highlighted">${this.value}</span>`);

      html += `<li><span>${city}, ${state}</span><span>${numberWithCommas(filteredCity.population)}</span></li>`
    });
    results.innerHTML = html;
  }

  function searchByWord(search, cities) {
    const regex = new RegExp(search, 'gi');
    const result = cities.filter(city => city.city.match(regex) || city.state.match(regex));
    return result;
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}());
