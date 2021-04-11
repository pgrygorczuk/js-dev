const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, req.query);
    console.table(req.query);
    next(); // next() or res.send();
}

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(4700, () => {
    console.log("Server started.");
});
