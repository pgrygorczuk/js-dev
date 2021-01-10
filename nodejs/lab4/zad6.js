const request = require('request');

const getUsers = (ids) => {
    let promises = [];
    for(let id of ids)
    {
        promises.push( new Promise( (resolve, reject) => {
            const url = 'https://jsonplaceholder.typicode.com/users/' + id;
            request(url, function (error, response, body) {
                if( error || response.statusCode !== 200)
                    reject('Receiving data failed.');
                resolve( JSON.parse( body ) );
            });
        } ) );
    }
    return promises;
}

let promises = getUsers( [2, 5, 7] );

Promise.all( promises ).then( (users) => {
    for( let user of users ){
        console.log( user.name );
    }
} ).catch( (error) => {
    console.log(error);
} );
