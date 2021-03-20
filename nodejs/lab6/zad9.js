//9. Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników
// http://localhost:4700/add?name=Jan&username=janko&email=jan@nowak.abc
const http = require("http");
const headers = { 'Content-type' : 'text/plain;charset=utf-8' };
let users = [
    { id: 0, name: 'Paweł', username: 'p.grygorczuk', email: 'pawel@email.com' },
    { id: 1, name: 'Jan Kowalski', username: 'j.kowalski', email: 'j.kowalski@gmail.com' },
    { id: 2, name: 'Adam Nowak', username: 'a.nowak', email: 'a.nowak@gmail.com' } ];

function add(params, res){
    if(!params["name"] || !params["username"]){
        res.writeHead(400, headers);
        res.end("Wymagany jest parametr 'name' i 'username'.");
        return;
    }
    users.push({
        id: users.length,
        name: params["name"],
        username: params["username"],
        email: params["email"],
    });
    // test
    // res.writeHead(200, { 'Content-type' : 'application/json;charset=utf-8' });
    // res.end( JSON.stringify(users) );
    res.writeHead(200, headers);
    res.end("" + (users.length-1) );
}

function show(params, res){
    if(params['id']){
        const id = params['id'];
        if( id>=0 && id<users.length ){
            res.writeHead(200, headers);
            res.end( JSON.stringify(users[id]) );
        }
        else{
            res.writeHead(200, headers);
            res.end('User not found');
        }
    }
    else{
        res.writeHead(200, headers);
        res.end( JSON.stringify(users) );
    }
}

function del(params, res){
    const id = params['id'];
    if(id && users[id]){
        users.splice(params['id'], 1);
        res.writeHead(200, headers);
        res.end('User deleted');
    }
    else{
        res.writeHead(400, headers);
        res.end('User not found');
    }
}

const app = http.createServer( (req, res) => {
    let body = "", params = {};
    const urlObject = new URL(req.url, `http://${req.headers.host}`);

    // Prepare params
    for(let param of urlObject.searchParams){
        params[param[0]] = param[1];
    }

    if(req.method === "POST" && urlObject.pathname.startsWith('/add')){
        add(params, res);
    }
    else if(req.method === "GET" && urlObject.pathname.startsWith('/show')){
        show(params, res);
    }
    else if(req.method === "DELETE"){
        del(params, res);
    }
    else{ //Front page
        body += '<a href="/show">Show users</a>';
        res.writeHead(200, { 'Content-type' : 'text/html;charset=utf-8' });
        res.end(body);
    }
});

app.listen(4700);
