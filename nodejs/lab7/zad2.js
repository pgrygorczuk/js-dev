const express = require('express');
const app = express();

// http://localhost:4700/mnozenie/4/5

app.get('/mnozenie/:a/:b', (req, res) => {
    const {a, b} = req.params;
    res.send( (a*b).toString() );
});

app.listen(4700, () => console.log('Express server started.'));
