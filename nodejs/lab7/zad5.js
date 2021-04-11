const express = require('express');
const app = express();

let posts = [
    { id: 0, userId: 0, title: 'Pierwszy tytuł', body: 'Lorem ipsum dolor sit amet...' },
    { id: 1, userId: 1, title: 'Drugi tytuł', body: 'Ala ma kota.' },
];

// This is a built-in middleware function in Express. It parses incoming requests with
// JSON payloads and is based on body-parser.
app.use(express.json());

app.post('/add', (req, res) => {
    const id = posts.length + Date.now();
    if(req.body){
        posts.push( {id: id, ...req.body} );
        res.json(posts);
    }
});

app.get('/show', (req, res) => {
    res.json(posts);
});

app.delete('/delete/:id', (req, res) => {
    if( req.params.id in posts ){
        posts.splice(req.params.id, 1);
        res.send('User has been deleted.');
    }
    else{
        res.status(400).send('User not found.');
    }
});

app.listen(4700, () => console.log('Express server started.'));
