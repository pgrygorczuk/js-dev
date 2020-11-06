const fs = require('fs');
const math = require('./math.js');

if( process.argv.length < 4 )
{
    console.log( 'Zbyt mało parametrów.' );
    return;
}

if( process.argv.length > 4 )
{
    console.log( 'Zbyt dużo parametrów.' );
    return;
}

let
    file_1 = process.argv[2],
    file_2 = process.argv[3];

let
    a = parseFloat( fs.readFileSync( file_1 ) ),
    b = parseFloat( fs.readFileSync( file_2 ) );

fs.writeFileSync( "./wynik.txt", `Dodawanie liczb ${a} i ${b} daje w wyniku ${math.add(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Odejmowanie liczb ${a} i ${b} daje w wyniku ${math.sub(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Mnożenie liczb ${a} i ${b} daje w wyniku ${math.mul(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Dzielenie liczb ${a} i ${b} daje w wyniku ${math.div(a, b)}\n` );

console.log( 'wynik.txt saved.' );
