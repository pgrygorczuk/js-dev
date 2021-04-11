const express = require('express');
const app = express();

app.use('/', express.static('images'));

app.get('/', (req, res) => {
    res.send();
});

app.listen(4700, () => console.log('Server started.'));
