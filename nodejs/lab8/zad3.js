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
    const user = users.find( user => {
        return user.login === login && user.password === password;
    });

    if( user ){
        req.user = user;
        next();
    }
    else{
        res.send( 401, 'Permission denied.' );
    }
};

app.use(authorize);

app.get('/', (req, res) => {
    res.send(`Hello ${req.user.login}!`);
});

app.listen(4700, () => console.log('start server'));
