
/*

It is necessary to initialize the connection to the server from client for communication between them. For initializing the connection, 
creation of Javascript object with the URL with the remote or local server is required.

The URL mentioned below is a public address that can be used for testing and experiments. 
The websocket.org server is always up and when it receives the message and sends it back to the client.
*/

const socket = new WebSocket("ws://echo.websocket.org");