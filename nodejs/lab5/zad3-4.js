
async function hello()
{
    return new Promise( (resolve, reject) => {
        resolve( "Hello world! ");
    } );
}

async function add(a, b)
{
    return new Promise( (resolve, reject) => {
        const result = a + b;
        if( result % 2 == 0 ){
            reject( "The result is even number." );
        }
        resolve( result );
    } );
}


hello().then( (result) => {
    console.log( result );
})

add(2, 2)
    .then( (result) => {
        console.log( result );
    })
    .catch( (error) => {
        console.log( error );
    });
