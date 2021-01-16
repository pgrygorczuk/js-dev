const axios = require('axios');

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios ('https://jsonplaceholder.typicode.com/users/1');
    return response.data;
}

// IIFE
(async function () {
    try{
        const user = await getUser( 2 );
        console.log( user.name );
    }catch( error ){
        console.log( error );
    }
})();

