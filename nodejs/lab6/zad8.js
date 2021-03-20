// 8. Napiszmy aplikacja która zwróci wszystkie parametry podane w url.
// http://localhost:4700?name=jan&lastname=kowalski //wywołanie
// {'name':'jan','lastname':'kowalski'} //rezultat
const http = require("http");

const app = http.createServer( (req, res) => {
    let body = "";
    const
        urlObject = new URL(req.url, `http://${req.headers.host}`),
        headers = { 'Content-type' : 'application/json;charset=utf-8' };

    let params = {};
    for(let param of urlObject.searchParams){
        params[param[0]] = param[1];
    }

    body = JSON.stringify( params );
    res.writeHead(200, headers);
    res.end(body);
});

app.listen(4700);

