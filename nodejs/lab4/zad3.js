const sub = (a, b) => {
    return new Promise( (resolve, reject) => {
        let result = a-b;
        if( result < 0 ){
            reject( `Wynik ujemny: ${result}` );
        }else{
            resolve( result );
        }
    } );
};

sub(3, 4).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

sub(6, 4).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
