const request = require('request');

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
} ).catch( (error) => {
    console.log(error);
} );
