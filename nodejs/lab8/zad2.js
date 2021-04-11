const express = require('express');
const app = express();

const token = '123';

const users = [{
    login: 'jan',
    password: 'alamakota',
    name: 'Jan',
}, {
    login: 'adam',
    password: 'cukierki',
    name: 'Adam',
}];

const authorize = (req, res, next) => {
    const auth = req.headers["authorization"];
    const [login, password] = auth.split(':');

    if(users.some(user => user.login === login && user.password === password)){
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
