// Stwórzmy aplikację która pobiera 2 parametry a i b z adresu url i wykona mnożenie w naszej aplikacji.
// Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

// http://localhost:4700/dodawanie?a=5&b=2
const http = require("http");

const app = http.createServer( (req, res) => {
    let body = "";
    const
        urlObject = new URL(req.url, `http://${req.headers.host}`),
        headers = { 'Content-type' : 'text/plain;charset=utf-8' },
        a = parseFloat( urlObject.searchParams.get("a") ),
        b = parseFloat( urlObject.searchParams.get("b") );

    if(isNaN(a) || isNaN(b)){
        res.writeHead(400, headers);
        res.end('Oczekiwano parametrów liczbowych a i b');
    }

    if( urlObject.pathname.startsWith('/dodawanie') ){
        body += `${a} + ${b} = ${a+b}`;
    }
    else if(urlObject.pathname.startsWith('/odejmowanie')){
        body += `${a} - ${b} = ${a-b}`;
    }
    else if(urlObject.pathname.startsWith('/mnozenie')){
        body += `${a} * ${b} = ${a*b}`;
    }
    else if(urlObject.pathname.startsWith('/dzielenie')){
        if(b == 0){
            res.writeHead(400, headers);
            res.end('Nie mozna dzielic przez zero.');
        }
        body += `${a} / ${b} = ${a/b}`;
    }
    else{
        res.writeHead(404, headers);
        res.end('Nieznane działanie.');
    }

    res.writeHead(200, headers);
    res.end(body);
});

app.listen(4700);
