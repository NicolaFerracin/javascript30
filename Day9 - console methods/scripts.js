(function() {
  // Normal
  const array = [1, 2, 3, 4];
  console.log('String');
  console.log('String', array);

  // Interpolated
  const country = 'Antartica';
  console.log('I\'m from %s. And you?', country);

  // Styled
  const style = 'font-size: 30px; background-color: black; color: white;'
  console.log('%cStyled console log', style);

  // Info, warn and error
  console.info('Thank you for visiting this page.');
  console.warn('Don\'t paste here any script coming from people you don\'t know');
  console.error('Something went wrong, try to reload the page.');

  // assertion
  const expectedTitle = 'Console methods.';
  const actualTitle = document.querySelector('title').text;
  console.assert(actualTitle === expectedTitle, `The page title is not correct. Expected: "${expectedTitle}" - Actual: "${actualTitle}"`)

  // console.dir()
  const paragraph = document.querySelector('p');
  console.log('console.log() ->', paragraph);
  console.log('console.dir() on the line below.');
  console.dir(paragraph);

  let newArray = [];
  const MAX_ARRAY_LENGTH = 100000000;
  console.time('Populate array');
  for (let i = 0; i < MAX_ARRAY_LENGTH; i++) {
    newArray.push(i);
  }
  console.timeEnd('Populate array');
  //
  // const countTo = 46125;
  // for (let i = 1; i <= countTo; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.count('FizzBuzz');
  //   } else if (i % 3 === 0) {
  //     console.count('Fizz');
  //   } else if (i % 5 === 0) {
  //     console.count('Buzz');
  //   }
  // }

  const cities = [
    { name: 'Jakarta', nation: 'Indonesian', language: 'Indonesian', continent: 'Asia'},
    { name: 'Tokyo', nation: 'Japan', language: 'Japanese', continent: 'Asia'},
    { name: 'Rome', nation: 'Italy', language: 'Italian', continent: 'Europe'},
    { name: 'Lima', nation: 'Peru', language: 'Spanish', continent: 'South America'},
    { name: 'Maputo', nation: 'Mozambique', language: 'Portuguese', continent: 'Africa'}
  ];
  cities.forEach(city => {
    console.groupCollapsed(`${city.name}`);
    console.log(`City name: ${city.name}`);
    console.log(`City nation: ${city.nation}`);
    console.log(`City language: ${city.language}`);
    console.log(`City continent: ${city.continent}`);
    console.groupEnd(`${city.name}`);
  });
  console.table(cities);
  //
  // console.profile('test');
  setTimeout(createArray('asdasdsa'), 4000);
  // console.profileEnd('test');

}())
