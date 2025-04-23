
// What is a Process

/* 
A process is simply a program in execution.
When you run a Node.js file, Python script, Chrome browser, or even your calculator — each of these is a process.
Think of it as a living instance of a program. It exists in memory, has a unique ID, and is doing something.
*/

/*
When you run Node.js files like index.js and server.js separately, 
Node creates two independent processes, each with its own event loop, memory, and resources.

*/

/*
"I have an Express + Node.js server. My app is split into multiple .js files. 
When I start my server using node app.js (or any entry file), is my whole backend running as just one process?"
✅ YES! Your whole backend app runs as a single Node.js process.
*/

/* 
Concept | Process | Thread
Definition | Independent execution unit | Lightweight subprocess within a process
Memory | Has its own memory | Shares memory with others
Communication | Inter-process Communication (IPC) | Easier, shared memory
Crash Impact | One crash doesn't affect others | One crash may affect the whole app
*/