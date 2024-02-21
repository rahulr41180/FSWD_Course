
/*

This action is usually preferred for some communication with the server, 
which includes sending messages, which includes text files, binary data or images.

A chat message, which is sent with the help of send() action, is as follows −

Note − Sending the messages is only possible if the connection is open.

Example :
*/

// get text view and button for submitting the message
var textsend = document.getElementById("text-view");
var submitMsg = document.getElementById("tsend-button");

//Handling the click event
submitMsg.onclick = function ( ) {
   // Send the data
   socket.send( textsend.value);
}