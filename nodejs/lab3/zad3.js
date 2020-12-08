const fs = require('fs');
const yargs = require('yargs');

//node zad3.js --name=Adam --lastName=Mickiewicz
const args = yargs.argv;

fs.readFile( 'zad2.json', 'utf-8', (error, data) => {
    if(error)
    {
        console.log('Error while reading file.');
        return false;
    }
    const user = JSON.parse( data );
    console.log( `User name: ${user.name} user family: ${user.lastName}`  );
} );
