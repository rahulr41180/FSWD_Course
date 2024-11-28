
// Example :

console.log('Point1');

process.nextTick(() => {
  console.log('Next tick callback');
});

setImmediate(() => {
  console.log('Immediate callback');
});

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

console.log('Point2');

/* 
Synchronous Execution:

console.log('Start') and console.log('End') execute immediately, printing Start and End.
Process Next Tick:

process.nextTick() schedules its callback to be executed at the end of the current operation, before any I/O operations.
Immediate Callback:

setImmediate() schedules its callback to be executed after the I/O events callbacks.
Timeout Callback:

setTimeout() schedules its callback to be executed after at least 0 milliseconds have passed, 
which places it after process.nextTick() but possibly after setImmediate() depending on the timing.

By understanding these basic examples and the order of execution, 
you can effectively use setImmediate() in your Node.js applications to manage asynchronous operations and improve performance.
*/