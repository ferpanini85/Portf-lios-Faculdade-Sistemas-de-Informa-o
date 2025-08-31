const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Bem vindo a pagina inicial!');
    } else if (req.url === '/sobre') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Esta e a pagina sobre nos.');
    } else if (req.url === '/contato') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Esta e a pagina de contato.');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pagina nao encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
