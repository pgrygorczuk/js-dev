// 6. Stworzenie kalkulatora wprowadzanych danych przy uzyciu yargs.
// > node app.js --a=5 --b=7 --operator=*
// 35
//
// npm install yargs
// 

const yargs = require('yargs');
const args = yargs.argv;
// Here args = { _: [], a: 5, b: 7, operator: '*', '$0': 'app.js' }

let
    a = args['a'],
    b = args['b'],
    op = args['operator'];

console.log( eval( a + op + b ) );
