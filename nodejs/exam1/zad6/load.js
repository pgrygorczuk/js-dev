const fs = require('fs');

async function load()
{
    return new Promise( (resolve, reject) => {
        fs.readFile('todo-list.txt', 'utf-8', (error, data) => {
            if( error )
            {
                if( error.errno != -4058 ) //File not exists error.
                    reject( error );
                else
                    resolve( [] );
            }
            else
                resolve(
                    data.split("\n")
                    .filter( value => value ) ); // Removes empty lines.
        });        
    } );
}

module.exports = {
    load: load,
};