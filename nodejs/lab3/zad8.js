// Rozbicie poprzedniego zadania na moduly

const request = require('request');
const yargs = require('yargs');
const args = yargs.argv;
const userId = args['id'] != undefined ? args['id'] : '1';

// node zad7.js --id=1

function getUser(userId)
{
    return new Promise( (resolve, reject) => {
        const url = 'https://jsonplaceholder.typicode.com/users/' + userId;
        request(url, function (error, response, body) {
            if( error || response.statusCode !== 200)
                reject('Receiving data failed.');
            resolve( JSON.parse( body ) );
        });
    } );
}

function getWeather(lat, lng)
{
    return new Promise( (resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
        request(url, function (error, response, body) {
            if( error || response.statusCode !== 200)
                reject('Receiving data failed.');
            resolve( JSON.parse( body ) );
        });
    });
}

async function run()
{
    try{
        const user = await getUser(userId);
        const weather = await getWeather( user.address.geo.lat, user.address.geo.lng );
        console.log(weather);
    }catch(error){
        console.log(error);
    }
    console.log('Done.');
}

run();