const express = require('express');
const app = express();

let users = [
    {name: '123', username: '321', email: 'test1@test.pl'},
    {name: 'xyz', username: 'abc', email: 'test2@test.pl'},
];

// http://localhost:4700/add?name=123&username=321&email=test@test.pl
app.post('/add', (req, res) => {
    users.push(req.query);
    res.json(users);
});

// http://localhost:4700/show?id=0
app.get('/show', (req, res) => {
    if( req.query.id !== undefined )
        res.json(users[req.query.id]);
    else
        res.json(users);
});

app.delete('/delete', (req, res) => {
    if( req.query.id !== undefined && req.query.id in users ){
        users.splice(req.query.id, 1);
        res.send('User deleted.');
    }
    else{
        res.status(400).send('User not found.');
    }
});

app.listen(4700, () => console.log('Express server started.'));
