// src/server.js
import express from "express";
import { Worker } from "worker_threads";
import dotenv from "dotenv";
import path from "path";

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
worker.postMessage('Hello, Worker!');

app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});