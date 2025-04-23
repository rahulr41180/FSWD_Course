
// worker.js (Worker thread)
import { parentPort } from "worker_threads";

/* 
This line gets access to parentPort, which is the communication channel between this worker and the main thread.
Think of it like a walkie-talkie: parentPort is how the worker talks to the main thread.
*/

// Receive message from the main thread
parentPort?.on('message', (msg) => {
    console.log('Message from Main:', msg);
    parentPort?.postMessage('Hello from Worker');
});

/*
This listens for messages sent from the main thread via worker.postMessage(...).
The worker listens for messages from the main thread and sends a response back.

After receiving a message from the main thread, this sends a message back to the main thread.
That’s where the worker.on('message') in server.ts picks it up.
*/