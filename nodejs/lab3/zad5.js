// Powiadomic o bledzie pobierania danych lub braku uzytkownika
const request = require('request');
//const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/users/1';
// const url = 'https://dragon.uwb.edu.pl'; // Example of bad URL
// Example of not existing user ID = 20;

request(url, function (error, response, body) { //blad, odpowiedz np. 200, body - tresc
    // !error && response.statusCode === 200 -> O.K.
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
