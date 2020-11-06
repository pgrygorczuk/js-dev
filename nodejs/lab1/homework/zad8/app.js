const fs = require('fs');
const math = require('./math.js');

let
    a = parseFloat( fs.readFileSync( './a.txt' ) ),
    b = parseFloat( fs.readFileSync( './b.txt' ) );

fs.writeFileSync( "./wynik.txt", `Dodawanie liczb ${a} i ${b} daje w wyniku ${math.add(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Odejmowanie liczb ${a} i ${b} daje w wyniku ${math.sub(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Mnożenie liczb ${a} i ${b} daje w wyniku ${math.mul(a, b)}\n` );
fs.appendFileSync("./wynik.txt", `Dzielenie liczb ${a} i ${b} daje w wyniku ${math.div(a, b)}\n` );
