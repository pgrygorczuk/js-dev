const fs = require('fs');
const axios = require('axios').default;
const numbersapi = 'http://numbersapi.com/';


fs.readFile('./data.json', 'utf-8', (error, data) => {
    if (error) throw error;
    const obj = JSON.parse(data);
    const url = numbersapi + obj.number; 
    axios.get( url )
    .then( result => {
        fs.writeFile(obj.filename, result.data, 'utf-8', (error, data) => {
            if(error)
                console.log(error);
            else
                console.log( `Plik '${obj.filename}' został utworzony:\n${result.data}` );
        });
    }).catch( error => {
        console.log( `Pobieranie danych z adresu '${url}' nie powiodło się (status=${error.response.status}).` );
    } );
});
