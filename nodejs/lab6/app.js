const http = require("http");

const app = http.createServer( (req, res) => {

    if(req.method === "GET"){

        // Example 1: plaintext
        //res.writeHead(200, {'Content-type' : 'text/plain'});
        //res.write("To jest ciało naszej odpowiedzi.");

        // Example 2: json
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.write('{"firstname":"Jan"}');
        res.end();
    }

    if(req.method === "POST"){
        res.end("Hello World from POST method.");
    }

    res.end("Hello World");
});

app.listen(4700);
