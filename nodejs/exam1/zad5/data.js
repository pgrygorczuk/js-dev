const axios = require('axios').default;

async function getData(url)
{
    const url_ = 'https://jsonplaceholder.typicode.com/' + url;
    try{
        const result = await axios.get( url_ );
        if( result.status == 200 )
            return result.data;
    }catch(error)
    {
        console.log( `Pobieranie danych z adresu '${url_}' nie powiodło się (status=${error.response.status}).` );
    }
    return false;
}

module.exports = {
    getData: getData,
};
