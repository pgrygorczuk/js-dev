const express = require('express');
const app = express();

const customMiddleware = (req, res, next) => {
    if( req.header('authorization') === '123' ){
        next();
    }
    else{
        res.send( 403, 'Permission denied.' );
    }
};

app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(4700, () => console.log('start server'));
