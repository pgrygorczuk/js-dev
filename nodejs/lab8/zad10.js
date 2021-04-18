const express = require('express');
const fs = require('fs');
const logger = require('./logger.js');
const app = express();

app.use( logger.log('Request received.') );

app.get('/', (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.use( logger.log('Response sent.') );

app.listen(4700, () => logger.logMessage('Server started.'));
