// 8. Dodanie do poprzedniej aplikacji zapisu do pliku przy użyciu modułu fs oraz funkcji asynchronicznej writeFile
// > node zad8.js --a=5 --b=7 --operator=*

const yargs = require('yargs');
const fs = require('fs');
const args = yargs.argv;
// Here args = { _: [], a: 5, b: 7, operator: '*', '$0': 'app.js' }

function operation(a, b, callback)
{
    const result = eval( a + args['operator'] + b );
    return callback( result );
}

operation(args['a'], args['b'], (result) => {
    if( result == NaN ){
        console.log('Operacja nieudana');
        process.exit(1);
    }
    fs.writeFile('zad.8.txt', result.toString(), (err) => {
        if (err) throw err;
        console.log('File has been saved.');
    });
    console.log(`The result is ${result}`);
});
