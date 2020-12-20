const user      = require('./user.js');
const weather   = require('./weather.js');
const fs        = require('fs');
const yargs     = require('yargs');
const args      = yargs.argv;
const userId    = args['id'] != undefined ? args['id'] : '1';

function save(weatherData)
{
    fs.writeFile('./output.json', JSON.stringify(weatherData), 'utf-8', (err, data) => {
        if(err){
            return console.log(err);
        }
    });
}

async function run()
{
    try{
        const userData = await user.getUser(userId);
        const weatherData = await weather.getWeather(
            userData.address.geo.lat,
            userData.address.geo.lng );
        const dataToSave = {
            username: userData.name,
            temperature: weatherData.main.temp,
        };
        save(dataToSave);
    }catch(error){
        console.log(error);
    }
    console.log('Done.');
}

run();
