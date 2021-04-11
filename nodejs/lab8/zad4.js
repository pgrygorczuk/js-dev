const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const file = (req, res, next) => {
    const file = req.params.file;
    if( fs.existsSync(file) ){
        res.sendFile( path.resolve(file) );
    }
    else{
        res.send(404, 'File does not exists.');
    }
    //next();
};

app.use('/:file', file);

app.get('/', (req, res) => {
    res.send();
});

app.listen(4700, () => console.log('Server started.'));
