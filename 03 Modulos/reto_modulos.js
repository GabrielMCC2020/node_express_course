const os = require('os');
const http = require('http');
const events = require('events');

const port = 3000;
const hostname = 'localhost';

console.log('Directorio Actual: ', __dirname);
console.log('Arquitextura de la computadora: ', os.arch());

const evento = new events.EventEmitter()

evento.on('One Piece', () => {
console.log('Kaizoku Oni Ore Wa Naru');
})
evento.emit('One Piece');

const server = http.createServer((req,res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('¡Hola, mundo!');
})

server.listen(port, hostname, () => {
console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});