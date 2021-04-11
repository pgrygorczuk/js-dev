// Podzielmy odpowiednio naszą aplikację z zadania 5 wykorzystując express.Router(https://expressjs.com/en/4x/api.html#router)

const express = require('express');
const app = express();
const fs = require('fs');

// posts = fs.readFileSync('posts.json');
// posts = JSON.parse(posts);

// This is a built-in middleware function in Express. It parses incoming requests with
// JSON payloads and is based on body-parser.
app.use(express.json());

const add = require("./routes/add.js");
app.use("/add", add);

const show = require("./routes/show.js");
app.use("/show", show);

const del = require("./routes/delete.js");
app.use("/delete", del);

app.get('/test', (req, res) => {
    res.send('Hello world!');
});


app.listen(4700, () => console.log('Express server started.'));
