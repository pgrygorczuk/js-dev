const http = require("http");
//const url = require("url"); // Starsze rozwiazanie.

// http://localhost:4700?name=pawel
const app = http.createServer( (req, res) => {

    if(req.method === "GET"){

        let urlObject = new URL(req.url, `http://${req.headers.host}`);
        //res.end(`Hello World from GET method for ${req.url}.`);
        res.end(`Hello World from GET method for ${urlObject.searchParams.get("name")}.`);
    }

    if(req.method === "POST"){
        res.end("Hello World from POST method.");
    }

    res.end("Hello World");
});

app.listen(4700);
