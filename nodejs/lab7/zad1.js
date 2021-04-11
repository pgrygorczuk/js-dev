const express = require('express');
const app = express();

app.get('/:input', (req, res) => {
    let name = 'World'; // Default name.
    if(req.params.input){
        name = req.params.input;
    }

    res.send('Hello' + name);
});

app.listen(4700, () => console.log('Express server started.'));
