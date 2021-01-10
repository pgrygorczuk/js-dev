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

const ids = [ 2, 5, 7 ];
const userPromises = ids.map( id => getUser(id) );

Promise.all( userPromises ).then( (users) => {
    users.forEach(user => {
        console.log( user.name );
    });
} ).catch( (error) => {
    console.log(error);
} ).finally( () => {
    console.log('');
} );
