
// Question - 1 :

/*
1. What is Node.js? Where can you use it?
Node.JS is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. 
It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. 
You can use I/O intensive web applications like video streaming sites. 
You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.
*/

// Question - 2 :

/*
2. Why use Node.js?

It is generally fast
It rarely blocks
It offers a unified programming language and data type
Everything is asynchronous 

It yields great concurrency
*/

// Question - 3 :

/*
How does Node.js work?

A web server using Node.js typically has a workflow

that is quite similar to the diagram illustrated below. 
Let’s explore this flow of operations in detail.

1. Clients send requests to the webserver to interact with the web application. 
Requests can be non-blocking or blocking:
2. Request can be :
    1. Create data
    2. Querying for data
    3. Deleting data

    4. Updating the data
3. Node.js retrieves the incoming requests and adds those to the Event Queue.
4. The requests are then passed one-by-one through the Event Loop to web API.
It checks if the requests are simple enough not to require any external resources.
5. If the request are simple then The Event Loop processes simple requests (non-blocking operations), 
such as I/O Polling, and returns the responses to the corresponding clients.
6. If the request required external resources for doing it then A single thread from the 
Thread Pool is assigned to a single complex request. 
This thread is responsible for completing a particular blocking request by accessing external resources, 

such as computation, database, file system, etc.
7. Once the task is carried out completely, 
the response is sent to the Event Loop that sends that response back to the client.
*/