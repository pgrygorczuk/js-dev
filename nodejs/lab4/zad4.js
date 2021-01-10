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

getUser(2).then( (data) => {
    console.log( data );
} ).catch( (error) => {
    console.log(error);
} );
