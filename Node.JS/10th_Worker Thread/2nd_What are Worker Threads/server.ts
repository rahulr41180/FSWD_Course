
import express from "express";
import { Worker } from "worker_threads"

const app = express();
const PORT = 3000;

/* 
Worker threads are a way to run JavaScript code in parallel, separate from the main thread of execution. 
This allows you to offload CPU-intensive tasks (like calculations, file processing, etc.) to different threads, improving the performance of your application.

Main Thread: This is the default thread where your Node.js application runs.

Worker Thread: This is a separate thread where you can run a heavy task concurrently, without blocking the main thread.

In Node.js, the worker_threads module is used to create and manage these worker threads.
*/


app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});