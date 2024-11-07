
/* 
In the context of Node.js, EDA is particularly powerful because of its non-blocking, 
asynchronous nature, which aligns well with handling multiple events concurrently.
*/

// Here's a breakdown of how EDA works in Node.js:

/* 
Events: Everything in Node.js is based on events. An event is essentially a signal indicating that something has happened. 
This could be a user action, a system notification, or any other occurrence that your application is interested in.


EventEmitter: Node.js provides the EventEmitter class as a fundamental building block for implementing event-driven architecture. 
It allows you to emit named events asynchronously and register listeners to those events. Each event has a name and an optional data payload.

Publish-Subscribe (Pub/Sub): EDA often employs a pub/sub model. In Node.js, you can use the EventEmitter as a pub/sub mechanism 
where certain parts of your application publish events, while other parts subscribe to those events and react accordingly.

Callbacks or Promises: When an event occurs, subscribers can react to it by executing callback functions or resolving promises. 
This allows for asynchronous handling of events and enables non-blocking behavior.
*/

// Import EventEmitter
// const EventEmitter = require('events');

// Create an instance of EventEmitter
// const emitter = new EventEmitter();

// Subscribe to an event
// emitter.on('myEvent', (data) => {
    // console.log('Event occurred:', data);
// });

// Emit an event
// emitter.emit('myEvent', { message: 'Hello, world!1' });

// emitter.emit('myEvent', { message: 'Hello, world!2' });

/* 
We create an instance of EventEmitter.
We subscribe to an event named 'myEvent' using the on method. When this event occurs, the provided callback function is executed.
We emit an event named 'myEvent' using the emit method, passing data to be processed by the callback function.
*/

/* 
emit: This method is used to trigger an event. When you call emit on an EventEmitter instance, you're essentially saying,
"Hey, this event has occurred!". You provide the name of the event as the first argument, and optionally, 
you can provide data that you want to pass along with the event. 
Other parts of your codebase that are listening for this event will then be notified.
*/

/* 
on: This method is used to register a listener for a specific event. When you call on, you're saying, 
"I'm interested in this event, and here's what I want to happen when it occurs." You provide the name of the event you're interested in, 
and a callback function that will be executed when that event is emitted. 
The callback function typically takes any data passed with the event as its argument.
*/

/*
----- Observer pattern -------
|                             |
Event Emitter -> Event Listener -> Handler
*/

/* 
In Node.js, events are a fundamental concept used to handle asynchronous operations. 
The event-driven architecture in Node.js is built around the idea of emitting and listening for events. 
This model is particularly useful for handling I/O operations, user interactions, and other asynchronous tasks.

1. EventEmitter Class
The core of the event system in Node.js is the EventEmitter class, which is part of the events module. 
Objects of this class can emit named events and listen for those events. 
Many built-in modules in Node.js, such as HTTP, streams, and file systems, are based on EventEmitter.

2. Emitting Events
When an event is emitted, all the listeners subscribed to that event are invoked. 
You can emit events using the emit method of the EventEmitter instance.

3. Listening to Events
To listen for events, you use the on method of the EventEmitter instance. 
You can also use once to listen for an event only once.
*/

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, world!\n');
    }
});

// Listen for the 'request' event
server.on('request', (req, res) => {
    console.log(`Received request for ${req.url}`);
});

// Start the server
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

/* 
In this example, the server emits the request event every time an HTTP request is received. 
The event listener logs the requested URL to the console.
*/