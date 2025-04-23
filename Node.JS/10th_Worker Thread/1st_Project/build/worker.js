"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// worker.js (Worker thread)
const worker_threads_1 = require("worker_threads");
/*
This line gets access to parentPort, which is the communication channel between this worker and the main thread.
Think of it like a walkie-talkie: parentPort is how the worker talks to the main thread.
*/
// Receive message from the main thread
worker_threads_1.parentPort?.on('message', (msg) => {
    console.log('Message from Main:', msg);
    worker_threads_1.parentPort?.postMessage('Hello from Worker');
});
/*
This listens for messages sent from the main thread via worker.postMessage(...).
The worker listens for messages from the main thread and sends a response back.

After receiving a message from the main thread, this sends a message back to the main thread.
That’s where the worker.on('message') in server.ts picks it up.
*/ 
