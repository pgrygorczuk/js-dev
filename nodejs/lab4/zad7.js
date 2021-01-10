const request = require('request');
const fs      = require('fs');

function save( data )
{
    return new Promise( (resolve, reject) => {
        fs.writeFile('./output.json', JSON.stringify( data ), 'utf-8', (err, data) => {
            if(err){
                reject( err );
            }else{
                resolve( 'Data has been saved.' );
            }
        });
    } );
}

const getUser = (id) => {
    return new Promise( (resolve, reject) => {
        const url = 'https://jsonplaceholder.typicode.com/users/' + id;
        request(url, function (error, response, body) {
            if( error || response.statusCode !== 200)
                reject('Receiving data failed.');
            resolve( JSON.parse( body ) );
        });
    } );
}

const getWeather = (lat, lng) => {
    return new Promise( (resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
        request(url, function (error, response, body) {
            if( error || response.statusCode !== 200 )
                reject('Receiving data failed.');
            resolve( JSON.parse( body ) );
        });
    });
}

getUser(2).then( (user) => {
    console.log( user );
    return getWeather(
        user.address.geo.lat,
        user.address.geo.lng );
} ).then( (weather) => {
    console.log( weather );
    return save( weather );
} ).then( (text) => {
    console.log(text);
} ).catch( (error) => {
    console.log(error);
} );
