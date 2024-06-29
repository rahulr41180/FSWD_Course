
// Close Callbacks Phase :

/* 
This phase executes close callbacks, such as those for closing a socket or file descriptor.
*/

const net = require('net');

const server = net.createServer((socket) => {
  socket.on('close', () => {
    console.log('Socket closed');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

server.on('connection', (socket) => {
  console.log('New connection');
  socket.end();
});