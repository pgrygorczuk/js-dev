const express = require('express');
const app = express();

const token = '123';

const authorize = (req, res, next) => {
    if( req.header('authorization') === token ){
        next();
    }
    else{
        res.send( 401, 'Permission denied.' );
    }
};

app.use(authorize);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(4700, () => console.log('start server'));
