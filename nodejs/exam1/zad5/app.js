const data  = require('./data.js');
const yargs = require('yargs');
const args  = yargs.argv;

// Przyklad wywolania:
// node app.js --user=1 --album=1

const userId  = args['user' ] != undefined ? args['user' ] : '1';
const albumId = args['album'] != undefined ? args['album'] : '1';

(async function (){

    // User
    const user = await data.getData('users/' + userId);
    if( !user )
        console.log(`Brak danych o użytkowniku [id=${userId}].`);
    else
        console.log( 'E-mail: ' + user.email );

    // Albums
    const albums = await data.getData('albums?userId=' + userId);
    if( albums.length == 0 )
        console.log(`Brak danych o albumie [id=${albumId}].`);
    else
        console.log( 'Ilość albumów: ' + albums.length );

    // Photos in album
    const photos = await data.getData('photos?albumId=' + albumId);
    if( photos.length == 0 )
        console.log(`Brak zdjęć w albumie [id=${albumId}].`);
    else
    {
        console.log( `Zdjęcia w albumie [id=${albumId}]:` );
        photos.forEach(element => {
            console.log(`${element.id}. ${element.title}`);
        });
    }

})();
