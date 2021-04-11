const express = require('express');
const app = express();

app.use('/', express.static('images'));

app.get('/:file', (req, res) => {
    res.send(404, 'File not found.');
});

app.listen(4700, () => console.log('Server started.'));
