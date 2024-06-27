
// Phases in the Event Loop

/* 
In Node.js, the event loop generally follows a strict order of phases during each iteration. 
However, there are a few nuances and scenarios where the behavior might appear as if the phases are not being checked in order. 
Here are some important considerations:

Phases of the Event Loop
Each iteration of the event loop goes through these phases in order:

Timers: Executes callbacks scheduled by setTimeout() and setInterval().

Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
Idle, Prepare: Used internally by Node.js.
Poll: Retrieves new I/O events; executes I/O related callbacks (almost all I/O callbacks except close callbacks, timers, and setImmediate).
Check: Executes callbacks scheduled by setImmediate().
Close Callbacks: Executes close event callbacks, e.g., socket.on('close').
*/

/* 
Preemptive Execution

setImmediate: Callbacks scheduled with setImmediate are executed after the I/O events callbacks but 
before the timers scheduled with setTimeout or setInterval. 
This can sometimes give the impression that the phases are not strictly followed because setImmediate callbacks are processed in the Check phase, 
which comes after the Poll phase but can appear before Timers phase callbacks in the next iteration.

Process.nextTick: This is a special mechanism in Node.js that allows a callback to be executed immediately after the current operation completes, 
but before the event loop continues. 
It allows for deferring execution until the next iteration of the event loop but is processed before any I/O or timer events. 
This can make it seem like phases are skipped.
*/

/* 
CallStack will place the callback in respective phase.
and each phase has it's own APIs and Callback Queue.
*/