const express = require('express');
const app2 = express();

app2.get('/', (req, res) => {
    //res.send(users);
    res.json(users);
});

app2.listen(4700, () => {
    console.log('Server started.');
});

