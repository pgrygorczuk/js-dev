const http = require("http");

// Napisac apliakcje serwerowa, ktora zwroci okreslony komunikat w zaleznosci od tego
// pod jaki URL wykonamy żądanie.
// http://localhost:4700/user?name={{testUser}} => zwraca komunikat "uzytkownik ma na imie {{testUser}}"
// http://localhost:4700/comment?title={{testComment}} => zwraca komunikat "komentarz ma tytuł {{testComment}}"

const app = http.createServer( (req, res) => {

    let urlObject = new URL(req.url, `http://${req.headers.host}`);
    let body = "";

    // req.url zawiera /user?name=pawel
    if( urlObject.pathname === '/user' ){
        //Jezeli nie przeslano parametru, wyswietlimy ?
        body = `Użytkownik ma na imię ${urlObject.searchParams.get("name") || "?"}`;
    }
    else if( urlObject.pathname === '/comment' ){
        body = `Komentarz ma tytuł ${urlObject.searchParams.get("title") || "?"}`;
    }

    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write(body);
    res.end();

});

app.listen(4700);
