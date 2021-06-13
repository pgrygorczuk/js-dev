const express = require('express');
const app = express();

// Ex 1: render view in PUG.
// Indentation is important in .pug files.

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    const { name = 'World '} = req.params;
    const scope = {
        header: "hello",
        paragraphText: "My text in p1.",
        showHiddenText: true,
        letters: ["A", "B", "X", "Z"],
    };  
    res.render('zad1', scope);
});

app.listen(4700, () => console.log('Server stared.'));
