const users = [{
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

const http = require('http');
const app = http.createServer( (request, response) => {
    response.writeHead(200, {'': ''});
    response.end(JSON.stringify(users));
} );

app.listen(4700);