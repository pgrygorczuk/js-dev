// 7
// > node zad7.js --a=5 --b=7 --operator=*
// 35

const yargs = require('yargs');
const args = yargs.argv;
// Here args = { _: [], a: 5, b: 7, operator: '*', '$0': 'app.js' }

if( process.argv.length < 3 ){
    console.log( 'Zbyt mało parametrów.' );
    process.exit(1);
};
if( process.argv.length > 3 ){
    console.log( 'Zbyt dużo parametrów.' );
    process.exit(1);
};

function operation(a, b, callback)
{
    const result = eval( a + args['operator'] + b );
    return callback( result );
}

operation(args['a'], args['b'], (result) => {
    console.log(`The result is ${result}`);
    return result;
});
