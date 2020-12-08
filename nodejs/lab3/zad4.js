// Pobrac request https://jsonplaceholder.typicode.com/users/{ID}
const request = require('request');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/users/1';

request(url, function (error, response, body) { //blad, odpowiedz np. 200, body - tresc
    if(error){
        console.log('error');
    }else{
        const user = JSON.parse( body );
        console.log( `Username: ${user.name}, [${user.address.geo.lat}, ${user.address.geo.lng}]` );
    }
});
