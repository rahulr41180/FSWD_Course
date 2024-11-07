
// Definition and Purpose :

/* 
Definition: 
process.nextTick() schedules a callback to be invoked in the next iteration of the event loop, 
right after the current operation completes and before any I/O operations or timers.

Purpose: 
It is used to defer the execution of a function until the current stack is cleared but before the event loop continues to the next phase. 
This is useful for breaking up long operations, avoiding stack overflows, and handling asynchronous operations in a more granular way.
*/

// process.nextTick(callback[, ...args]);

console.log('Start');

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('Scheduled');

process.nextTick(() => {
  console.log('Another next tick callback');
});

console.log('End');