
// src/worker.js (Worker thread)
import { parentPort } from "worker_threads";

// Receive message from the main thread
parentPort?.on('message', (msg) => {
    console.log('Message from Main:', msg);
    parentPort?.postMessage('Hello from Worker');
});