// src/server.js
import express from "express";
import { Worker } from "worker_threads";
import dotenv from "dotenv";
import path from "path";
import { getHeapStatistics } from "v8";

const app = express();
dotenv.config();
const PORT = 3000;

const isDev = process.env.NODE_ENV !== "production";

const pathToWorker = path.resolve(__dirname, "worker.ts").replace(/\\/g, '/');
const worker = isDev ? new Worker(`
    require('ts-node/register');
    require('${pathToWorker}')    
`, { eval: true }) : new Worker(path.resolve(__dirname, "worker.js"));

// Listening / watching worker
worker.on('message', (data) => {
    console.log('Message from Worker:', data);

    if (data === 'cleanup-complete') {
        logMemoryUsage("Before GC");
        if (global.gc) {
            console.log('Triggering GC after cleanup...');
            global.gc();
            logMemoryUsage("After GC (Auto)");
        } else {
            console.warn("GC not exposed. Run with --expose-gc");
        }
    }
});

worker.on('error', (error) => {
    console.error('Worker Error:', error);
});

worker.on('exit', (exitCode) => {
    if (exitCode !== 0) {
        console.error(`Worker stopped with exit code ${exitCode}`);
    }
});

// emmiting worker
// Sending data to the Worker
worker.postMessage("allocate");

function logMemoryUsage(label: any) {
    const mem = process.memoryUsage();
    const heap = getHeapStatistics();
    console.log(`--- ${label} ---`);
    console.log(`Heap Used: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Total: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Limit: ${(heap.heap_size_limit / 1024 / 1024).toFixed(2)} MB`);
}

app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});