
/*

A Web Socket server is a simple program, which has the ability to handle Web Socket events and actions.

Connecting to the Web Server :
The Web Socket server works in a similar way to the Web Socket clients.
It is initialized to a Web Socket address. 
It handles OnOpen, OnClose, and OnMessage events, and sends messages to the clients too.

Creating a Web Socket Server Instance :
Every Web Socket server needs a valid host and port. 

An example of creating a Web Socket instance in server is as follows −
*/

var server = new WebSocketServer("ws://localhost:8181");

/* 
IwebSocketConnection :
Fleck represents the incoming connections (clients) with the IwebSocketConnection interface. 
Whenever someone connects or disconnects from our service, empty list can be created or updated.

*/

var clients = new List<IWebSocketConnection>();

/*
After that, we can call the Start method and wait for the clients to connect.
After starting, the server is able to accept incoming connections.

In Fleck, the Start method needs a parameter, which indicates the socket that raised the events −

*/

server.Start = (socket) =>
{
};