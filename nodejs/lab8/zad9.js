const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log( "Request received: " + new Date().toLocaleTimeString() );
    next();
});

app.get('/', (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.use((req, res, next) => {
    console.log( "Response sent: " + new Date().toLocaleTimeString() );
    next();
});

app.listen(4700, () => console.log('start server'));
