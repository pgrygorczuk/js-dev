const request = require('request');

function getWeather(lat, lng)
{
    return new Promise( (resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
        request(url, function (error, response, body) {
            if( error || response.statusCode !== 200 )
                reject('Receiving data failed.');
            resolve( JSON.parse( body ) );
        });
    });
}

module.exports = {
    getWeather: getWeather
};