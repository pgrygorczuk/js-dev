
const utils = require('./utils');

// przykładowe tablice do przetestowania nowej funkcji 'diff' z naszego modułu
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

// wyświetlamy wyniki wywołań funkcji 'diff' z modułu 'utils'
console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));
