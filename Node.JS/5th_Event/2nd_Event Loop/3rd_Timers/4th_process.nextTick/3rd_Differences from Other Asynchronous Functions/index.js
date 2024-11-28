
// Differences from Other Asynchronous Functions :

/* 
setImmediate():
Executes after the current poll phase in the check phase.
Lower priority compared to process.nextTick().

setTimeout():
Executes after the specified delay, in the timers phase.
Allows for deferring execution with a specific delay.
*/