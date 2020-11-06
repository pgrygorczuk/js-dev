//Ex.: node .\app.js c:/windows

const fs = require('fs');

if( process.argv.length < 3 ){ console.log( 'Zbyt mało parametrów.' ); process.exit(1); };
if( process.argv.length > 3 ){ console.log( 'Zbyt dużo parametrów.' ); process.exit(1); };

const directory = process.argv[2];

let files = fs.readdirSync( directory );

console.log( `Zawartość katalogu '${directory}:'` );
files.forEach( (value, index, array) => {
    console.log( value );
} );

