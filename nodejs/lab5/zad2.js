
function div( a, b )
{
    // 1. Fail fast.
    // 2. Garbage in garbage out.
    if( b == 0 ){
        throw new Error( 'Divide by 0.' );
    }
    return a / b;
}

try{
    const result = div( 2, 0 );
    console.log( result );
}catch( error  )
{
    console.log( error );
}
