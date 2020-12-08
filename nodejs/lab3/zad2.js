const fs = require('fs');
const yargs = require('yargs');

//node app.js --name=Adam --lastName=Mickiewicz
const args = yargs.argv;

const user = {
    name: args['name'],
    lastName: args['lastName'],
}

const data = JSON.stringify( user );

fs.writeFile( 'zad2.json', data, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Write ok.');
    }
} );
