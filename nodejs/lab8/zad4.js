const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Uwaga: wymagane dodanie zabezpieczenia, ktore umozliwi pobieranie
// tylko plikow z okreslonego podkatalogu, np. z 'public'.

const getFile = (req, res, next) => {
    const file = req.params.file;
    //const absPath = __dirname + file;
    if( fs.existsSync(file) ){
        res.sendFile( path.resolve(file) );
    }
    else{
        res.send(404, 'File does not exists.');
    }
    //next();
};

app.use('/:file', getFile);

app.get('/', (req, res) => {
    res.send();
});

app.listen(4700, () => console.log('Server started.'));
