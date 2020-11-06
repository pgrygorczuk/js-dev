
//process.argv.forEach( (element, index, array) => { console.log( element ); } )

let name = process.argv[2];
if( name == undefined ) name = 'World';

console.log( `Hello ${name} !` );
