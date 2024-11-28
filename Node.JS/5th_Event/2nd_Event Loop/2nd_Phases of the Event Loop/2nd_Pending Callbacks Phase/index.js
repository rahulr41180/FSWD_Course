
// Pending Callbacks Phase :

/* 
The Pending Callbacks phase is where Node.js executes I/O callbacks 
that were deferred to the next loop iteration. 
These are typically I/O callbacks from operations such as TCP errors, types of DNS operations, etc., 
that are not part of the Poll phase.
*/

const fs = require('fs');
const net = require('net');

// Create a TCP server to demonstrate TCP callbacks
const server = net.createServer((socket) => {
  console.log('New connection');

  socket.on('error', (err) => {
    console.log('Socket error:', err);
  });

  // Close the socket to trigger the 'close' event
  socket.end();
});

server.listen(8000, () => {
  console.log('Server listening on port 8000');

  // Client connection to trigger the 'connection' event
  const client = net.connect({ port: 8000 }, () => {
    console.log('Client connected');
    client.end();
  });

  // Asynchronous file read
  fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File read complete');
  });

  // Set a timeout
  setTimeout(() => {
    console.log('Timeout callback');
  }, 0);

  // Set an immediate
  setImmediate(() => {
    console.log('Immediate callback');
  });

  console.log('Setup complete');
});