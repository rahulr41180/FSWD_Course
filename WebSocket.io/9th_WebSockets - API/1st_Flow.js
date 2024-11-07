
/*

API – Definition :
API, an abbreviation of Application Program Interface, 
is a set of routines, protocols, and tools for building software applications.

Advantages of Web Socket
Web Socket solves a few issues with REST, or HTTP in general −

Bidirectional :


HTTP is a unidirectional protocol where the client always initiates a request. 
The server processes and returns a response, and then the client consumes it.

Web Socket is a bi-directional protocol where there are no predefined message patterns such as request/response. 
Either the client or the server can send a message to the other party.

Full Duplex :



HTTP allows the request message to go from the client to the server and then the server sends a response message to the client. 
At a given time, either the client is talking to the server or the server is talking to the client.

Web Socket allows the client and the server to talk independent of each other.

Single TCP Connection :

Typically, a new TCP connection is initiated for an HTTP request and terminated after the response is received. 
A new TCP connection needs to be established for another HTTP request/response.

For Web Socket, the HTTP connection is upgraded using standard HTTP upgrade mechanism and the client and 
the server communicate over that same TCP connection for the lifecycle of Web Socket connection.

The graph given below shows the time (in milliseconds) taken to process N messages for a constant payload size.
https://www.tutorialspoint.com/websockets/websockets_api.htm

The graph and the table given above show that the REST overhead increases with the number of messages. 
This is true because that many TCP connections need to be initiated and terminated and 
that many HTTP headers need to be sent and received.

This graph shows that the incremental cost of processing the request/response for a REST endpoint is minimal and most of the time is spent in connection initiation/termination and honoring HTTP semantics.

*/