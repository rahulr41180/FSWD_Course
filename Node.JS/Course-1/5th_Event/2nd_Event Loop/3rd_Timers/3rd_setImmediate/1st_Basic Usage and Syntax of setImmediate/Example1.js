
console.log("point1");

setImmediate(() => {
    console.log("Immediate");
})

console.log("point2");

/* 
Detailed Explanation :
Synchronous Execution: The first console.log('point1') executes synchronously.

Scheduling with setImmediate(): The setImmediate() schedules the callback function to be executed immediately after the current 
poll phase of the event loop.
Synchronous Execution: The second console.log('point2') executes synchronously.
Callback Execution: After the current synchronous code execution and I/O operations (if any), the setImmediate callback is executed.
The console.log('point1') statement is executed immediately, printing point1 to the console.
The setImmediate function is called, scheduling the provided callback to be executed after the I/O events callbacks.
The console.log('point1') statement is executed immediately, printing point2 to the console.
*/