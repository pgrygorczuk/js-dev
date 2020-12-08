const fs = require('fs');

const user = {
    name: 'Jan',
    lastName: 'Nowak',
}

const data = JSON.stringify( user );

fs.writeFile( 'zad1.json', data, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Write ok.');
    }
} );
