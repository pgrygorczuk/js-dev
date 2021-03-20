// Stwórzmy aplikację która pobiera 2 parametry a i b z adresu url i wykona mnożenie w naszej aplikacji.
// Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

// http://localhost:4700/?a=5&b=2
const http = require("http");

const app = http.createServer( (req, res) => {
    if(req.method === "GET")
    {
        let body = "";
        const
            urlObject = new URL(req.url, `http://${req.headers.host}`),
            a = urlObject.searchParams.get("a"),
            b = urlObject.searchParams.get("b");

        if( !a || !b)
            body += 'Oczekiwano parametrów a i b';
        else
            body += `${a} * ${b} = ${a*b}`;

        res.writeHead(200, {
            'Content-type' : 'text/plain;charset=utf-8',
        });
        res.write( body );
        res.end();
    }
});

app.listen(4700);

