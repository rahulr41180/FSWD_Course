
/*

create a Web Socket connection -> 

All you have to do is call the WebSocket constructor and pass in the URL of your server after that connection
will be extablished.
*/

// Create a new WebSocket Connection instance.
var socket = new WebSocket('ws://echo.websocket.org');


/* 
Once a connection has been established between the client and the server, 
the open event is fired from Web Socket instance. 
It is called as the initial handshake between client and server.

onopen refers to the initial handshake between client and the server 
which has lead to the first deal and the web application is ready to transmit the data.

The following code snippet describes opening the connection of Web Socket protocol −

*/

socket.onopen = function (event) {
    console.log("Connection established");
    // Display user friendly messages for the successful establishment of connection
    var label = document.getElementById("status");
    label.innerHTML = "Connection established";
}


/*
It is a good practice to provide appropriate feedback to the users waiting for 
the Web Socket connection to be established. 
However, it is always noted that Web Socket connections are comparatively fast.

The demo of the Web Socket connection established is documented in the given URL − 
https://www.websocket.org/echo.html
https://echo.websocket.org/


Establishing an open state allows full duplex communication and transfer of messages until 
the connection is terminated.
*/