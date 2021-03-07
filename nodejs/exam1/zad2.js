const colors = require('colors');

// Wywołanie: node zad2.js 'Tekst do pokolorowania.'

if(process.argv.length < 3){
    console.log('Podaj argument wywołania.');
}else{
    console.log( process.argv[2].rainbow );
}
