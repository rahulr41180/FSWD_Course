
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
const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Subscribe to an event
emitter.on('myEvent', (data) => {
    console.log('Event occurred:', data);
});

// Emit an event
emitter.emit('myEvent', { message: 'Hello, world!1' });
emitter.emit('myEvent', { message: 'Hello, world!2' });

/* 
We create an instance of EventEmitter.
We subscribe to an event named 'myEvent' using the on method. When this event occurs, the provided callback function is executed.
We emit an event named 'myEvent' using the emit method, passing data to be processed by the callback function.
*/