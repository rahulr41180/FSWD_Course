
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

/* 
In this example, when a new connection is received, the socket.end() method closes the socket, 
which triggers the close event and its callback is executed in the close callbacks phase.
*/