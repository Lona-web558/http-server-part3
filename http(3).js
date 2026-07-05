//HTTP server

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('I love Jesus with all my heart and soul and mind, very, very much!\n');
});

//Server listening on port 3000

server.listen(port, hostname, () => {
	console.log(`Server listening on http://{hostname}:${port}/`);
});