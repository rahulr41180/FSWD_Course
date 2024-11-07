
// Poll Phase :

/* 
The poll phase retrieves new I/O events and executes their callbacks. It also processes timers if there are any that are ready to execute.
*/

const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Text read complete');
});

setImmediate(() => {
  console.log('Immediate callback');
});

console.log('Start');

/* 
In this example, the poll phase handles the fs.readFile callback. The setImmediate callback is scheduled for the check phase, 
so it runs after the file read operation completes.
*/