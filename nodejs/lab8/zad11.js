const express = require('express');
const axios = require('axios');
const fs = require('fs');
const logger = require('./logger.js');
const app = express();
const url = 'https://jsonplaceholder.typicode.com/users/';

app.use( logger.log('Request received.') );

app.get('/', (req, res, next) => {
    res.send("Hello World!");
    next();
});
app.get('/users/:userId', (req, res, next) => {
    axios.get( url + req.params.userId )
        .then(response => {
            res.json(response.data);
            next();
        }).catch(error => {
            console.log(error);
        });
});

app.use( logger.log('Response sent.') );

app.listen(4700, () => logger.logMessage('Server started.'));
