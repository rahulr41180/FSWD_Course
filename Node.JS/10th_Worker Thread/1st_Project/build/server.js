"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const worker_threads_1 = require("worker_threads");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
const worker = new worker_threads_1.Worker(path_1.default.resolve(__dirname, "worker.js"));
/*
Note: Workers can’t directly run .ts	They need compiled .js files.

Do you need to build worker.ts every time?
Yes, if you're editing worker.ts, you need to build it so the updated worker.js is available for worker_threads to run.

That's because:

worker_threads only executes compiled JavaScript files (.js)

So it can't directly run .ts files unless you use hacks like ts-node, which are not optimal for performance
*/
/*
This line creates a new Worker thread using the file worker.js.
The file path points to the worker script which will run in its own thread.

Node.js spawns a separate thread, executing the code in worker.js independently from the main thread.
*/
// Listening / watching worker
worker.on('message', (data) => {
    console.log('Message from Worker:', data);
});
/*
This sets up an event listener on the worker.

It listens for the 'message' event, which the worker will emit when it sends data back.

In this case, when the worker sends any message using parentPort.postMessage(...), this callback logs it.
*/
worker.on('error', (error) => {
    console.error('Worker Error:', error);
});
/*
This listens for any runtime error inside the worker thread.

If any unhandled exception happens inside worker.js, the error will be caught here and logged.
*/
worker.on('exit', (exitCode) => {
    if (exitCode !== 0) {
        console.error(`Worker stopped with exit code ${exitCode}`);
    }
});
/*
This is triggered when the worker thread terminates (either normally or due to an error).

exitCode of 0 means a normal exit.

Any non-zero code indicates an issue, and we log it as an error.
*/
// emmiting worker
// Sending data to the Worker
worker.postMessage('Hello, Worker!');
/*
The main thread creates a worker and communicates with it via postMessage and listens for messages with .on('message').
This line sends a message from the main thread to the worker.
The message 'Hello, Worker!' is passed to the worker thread, where it will be received using an event listener on parentPort.
*/
app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
