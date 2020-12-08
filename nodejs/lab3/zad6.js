const request = require('request');
const yargs = require('yargs');
const args = yargs.argv;
const url = 'https://jsonplaceholder.typicode.com/users/';

// node zad6.js --id=1

request(url + args['id'], function (error, response, body) {
    if(error){
        console.log('Error while reading URL.');
        return false;
    }
    if( response.statusCode != 200 )
    {
        console.log("User with given ID doesn't exists: " + response.statusCode);
        return false;
    }
    const user = JSON.parse( body );
    console.log( `Username: ${user.name}, [${user.address.geo.lat}, ${user.address.geo.lng}]` );
});
