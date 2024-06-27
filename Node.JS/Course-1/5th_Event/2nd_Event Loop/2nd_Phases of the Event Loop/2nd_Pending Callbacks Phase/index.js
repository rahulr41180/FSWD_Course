
// Pending Callbacks Phase :

/* 
The Pending Callbacks phase is where Node.js executes I/O callbacks 
that were deferred to the next loop iteration. 
These are typically I/O callbacks from operations such as TCP errors, types of DNS operations, etc., 
that are not part of the Poll phase.
*/