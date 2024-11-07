
/* 

Closing a connection is possible with the help of onclose event.

After marking the end of communication with the help of onclose event, 
no messages can be further transferred between the server and the client.

Closing the event can occur due to poor connectivity as well.

The close() method stands for goodbye handshake. 
It terminates the connection and no data can be exchanged unless the connection opens again.

Similar to the previous example, 
we call the close() method when the user clicks on the second button.
*/

var textView = document.getElementById("text-view");
var buttonStop = document.getElementById("stop-button");

buttonStop.onclick = function () {
    // Close the connection, if open.

    if (socket.readyState === WebSocket.OPEN) {
        socket.close();
    }
}

/*
It is also possible to pass the code and reason parameters we mentioned earlier as shown below.
*/


socket.close(1000, "Deliberate disconnection");