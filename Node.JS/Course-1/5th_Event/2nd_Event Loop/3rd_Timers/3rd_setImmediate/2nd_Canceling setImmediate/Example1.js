
const fs = require('fs');

console.log('Start of script');

setTimeout(() => {
  console.log('Timeout callback');
}, 10);

fs.readFile(__filename, () => {
  console.log('File read complete1');

  setImmediate(() => {
    console.log('Immediate callback inside I/O callback1');
  });

  setTimeout(() => {
    console.log('Timeout callback inside I/O callback1');
  }, 0);
});

fs.readFile(__filename, () => {
  console.log('File read complete2');

  setImmediate(() => {
    console.log('Immediate callback inside I/O callback2');
  });

  setTimeout(() => {
    console.log('Timeout callback inside I/O callback2');
  }, 0);
});

setImmediate(() => {
  console.log('Immediate callback');
});

console.log('End of script');

/* 
Synchronous Code Execution
console.log('Start of script');: Prints to the console.
setTimeout(() => { console.log('Timeout callback'); }, 0);: Schedules a setTimeout callback for the timers phase of the next iteration.
fs.readFile(__filename, callback);: Starts an I/O operation. The callback will execute when the file read completes.
setImmediate(() => { console.log('Immediate callback'); });: Schedules an setImmediate callback for the check phase.
console.log('End of script');: Prints to the console.
2. First Iteration of the Event Loop
Timers Phase:

No callbacks to execute yet (since the setTimeout with 0 delay is only scheduled for the next iteration).
Poll Phase:

The event loop checks for I/O events. The file read operation completes, so the I/O callback executes:
console.log('File read complete'); prints.
Inside the I/O callback:
setImmediate(() => { console.log('Immediate callback inside I/O callback'); });: Schedules another setImmediate callback for the check phase.
setTimeout(() => { console.log('Timeout callback inside I/O callback'); }, 0);: Schedules another setTimeout callback for the timers phase of the next iteration.
Check Phase:

console.log('Immediate callback');: Executes the setImmediate callback scheduled in the main script.
3. Second Iteration of the Event Loop
Timers Phase:

Executes the setTimeout callback scheduled in the first iteration:
console.log('Timeout callback'); prints.
Executes the setTimeout callback scheduled inside the I/O callback:
console.log('Timeout callback inside I/O callback'); prints.
Check Phase:

Executes the setImmediate callback scheduled inside the I/O callback:
console.log('Immediate callback inside I/O callback'); prints.
Summary
First Iteration:

Executes synchronous code.
Enters the poll phase, processes I/O callbacks.
Enters the check phase, processes setImmediate callbacks.
Second Iteration:

Executes setTimeout callbacks scheduled for the next iteration.
Processes any remaining setImmediate callbacks scheduled within the I/O callback.
The key to understanding the order of execution lies in recognizing that the event loop processes 
the phases sequentially and callbacks are executed based on when they were scheduled and the phase they belong to.

Timers Phase (First Iteration): Only processes the initial setTimeout callbacks if the timers phase is reached.
Poll Phase: Handles I/O callbacks, including new callbacks scheduled by I/O operations.
Check Phase: Processes setImmediate callbacks that were scheduled for this phase.
Timers Phase (Second Iteration): Handles remaining setTimeout callbacks, including those scheduled within I/O callbacks.
This explains why setTimeout callbacks appear in the second phase of the event loop iteration, 
while setImmediate callbacks execute after the poll phase and before the second timers phase.
*/