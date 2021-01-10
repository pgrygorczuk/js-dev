const helloPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve( 'Hello world' );
    }, 5000 );
} );

helloPromise.then( text => {
    console.log( text );
} );
