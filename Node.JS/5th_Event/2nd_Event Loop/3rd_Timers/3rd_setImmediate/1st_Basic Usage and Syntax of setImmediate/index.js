
// Basic Usage and Syntax of setImmediate :

/* 
setImmediate() is a function in Node.js that is used to schedule the execution of a callback function to be executed immediately 
after the current poll phase of the event loop. It allows you to run code after I/O events callbacks but before setTimeout and setInterval timers.
*/

// Syntax :

// setImmediate(callback[, ...arg]);


// Example :

function printMessage(message) {
    console.log(message);
}

setImmediate(printMessage, 'Hello, world!');