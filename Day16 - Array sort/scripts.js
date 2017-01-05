(function() {

  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  const bandsList = document.querySelector('.bands');

  populateBandsList(bands, bandsList);

  function populateBandsList(bands, list) {
      list.innerHTML = bands.map(band => {
        return `<p>${band}</p>`;
      }).join('');
  }

  function removeArticle(string) {
    return string.replace(/^(a |an |the )/i, '');
  }

  document.sort = function() {
    const orderedBands = bands.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1);
    populateBandsList(orderedBands, bandsList);
  }
}());
