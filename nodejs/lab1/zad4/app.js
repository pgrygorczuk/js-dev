// Zapisz wynik dzialania do pliku za pomoca modulu 'fs'
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
// 'writeFileSync'

const fs = require('fs');
const math = require('./math.js');

//args: file, data, options
// fs.writeFileSync( "./results.txt",
//     `1 + 2 = ${math.add(1, 2)}\n1 - 2 = ${math.sub(1, 2)}\n1 * 2 = ${math.mul(1, 2)}\n1 / 2 = ${math.div(1, 2)}` );

// Rozwiazanie alternatywne:
fs.writeFileSync( "./results.txt", `1 + 2 = ${math.add(1, 2)}\n` );
fs.appendFileSync("./results.txt", `1 - 2 = ${math.sub(1, 2)}\n` );
fs.appendFileSync("./results.txt", `1 - 2 = ${math.mul(1, 2)}\n` );
fs.appendFileSync("./results.txt", `1 - 2 = ${math.div(1, 2)}\n` );
