
/*

This method stands for goodbye handshake. 
It terminates the connection completely and no data can be transferred until the connection is re-established.
*/

var textsend = document.getElementById("text-view");
var buttonStop = document.getElementById("stop-button");

//Handling the click event
buttonStop.onclick = function ( ) {

   // Close the connection if open
   if (socket.readyState === WebSocket.OPEN){
      socket.close( );
   }
}

/*
It is also possible to close the connection deliberately with the help of following code snippet −
*/

socket.close(1000,"Deliberate Connection");