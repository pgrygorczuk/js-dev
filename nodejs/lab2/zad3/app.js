
// npm init
// npm install lodash

const _ = require('lodash');

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const funcResult = _.uniq(someArray);

// wyświetlenie tablicy w konsoli
console.log(someArray);
console.log(funcResult);

// przykładowe tablice do przetestowania nowej funkcji 'difference' z modułu 'lodash'
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

// wyświetlamy wyniki wywołań funkcji 'difference' z modułu 'lodash'
console.log(_.difference(tabA, tabB));
console.log(_.difference(tabB, tabA));
