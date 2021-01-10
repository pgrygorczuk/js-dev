// Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego użytkownika. Pamiętajmy o odpowiednim zabezpieczeniu naszej aplikacji w przypadku błędu API(podobnie jak w z zadaniu 5).
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika

const request = require('request');
const yargs = require('yargs');
const args = yargs.argv;
const userId = args['id'];

// node zad7.js --id=1

function getWeatherUrl(lat, lng){
    return `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
}

let url = 'https://jsonplaceholder.typicode.com/users/' + userId;
request(url, function (error, response, body) {
    if( error || response.statusCode !== 200){
        console.log('Receiving data failed.');
        return false;
    }
    const user = JSON.parse( body );
    console.log( `User location found: ${user.name}, [${user.address.geo.lat}, ${user.address.geo.lng}]` );
    url = getWeatherUrl( user.address.geo.lat, user.address.geo.lng );
    request(url, function (error, response, body) {
        if( error || response.statusCode !== 200){
            console.log('Receiving data failed.');
            return false;
        }
        const data = JSON.parse( body );
        console.log( data );
    });
} );
