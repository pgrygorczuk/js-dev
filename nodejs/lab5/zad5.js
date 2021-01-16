// Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await.

async function add(a, b)
{
    const result = a + b;
    if( result % 2 == 0 ){
        throw new Error( "The result is even number." );
    }
    return result;
}

(async () => {
    try{
        const result = await add( 1, 1 );
        console.log( result );
    }catch( error ){
        console.log( error );
    }
})();
