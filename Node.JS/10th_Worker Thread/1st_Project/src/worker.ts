
// src/worker.js (Worker thread)
import { parentPort } from "worker_threads";

let bigArray: any[] = [];

// Receive message from the main thread
parentPort?.on('message', async (msg) => {
     if (msg === 'allocate') {
        // Allocate memory
        for (let i = 0; i < 100000000000; i++) {
            bigArray.push({ index: i, data: new Array(100).fill("x") });
        }

        // Simulate task delay or processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Free up memory
        bigArray = [];

        // Notify main thread to run GC
        parentPort?.postMessage('cleanup-complete');
    }
});