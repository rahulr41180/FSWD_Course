
// Key Characteristics :

/* 
High Priority: Callbacks scheduled with process.nextTick() are executed before any I/O events, timers, or other asynchronous operations.

Immediate Execution: The callbacks are executed immediately after the current operation completes, but before the event loop continues.

Stack Overflow Prevention: process.nextTick() can help prevent stack overflow by deferring function execution to the next event loop iteration.
*/