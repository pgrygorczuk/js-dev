const express = require('express');
const app = express();

// http://localhost:4700/mnozenie/4/5

app.get('/mnozenie/:a/:b', (req, res) => {
    const {a, b} = req.params;
    res.send( (a*b).toString() );
});

app.get('/dzielenie/:a/:b', (req, res) => {
    const {a, b} = req.params;
    if( b == 0 ){
        res.end('Nie można dzielic przez 0.');
    }
    res.send( (a/b).toString() );
    res.end();
});

app.get('/dodawanie/:a/:b', (req, res) => {
    let {a, b} = req.params;
    a = parseInt(a);
    b = parseInt(b);
    res.send( (a+b).toString() );
    res.end();
});

app.get('/odejmowanie/:a/:b', (req, res) => {
    const {a, b} = req.params;
    res.send( (a-b).toString() );
    res.end();
});

app.listen(4700, () => console.log('Express server started.'));
