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

module.exports = {
    getUser: getUser
};
