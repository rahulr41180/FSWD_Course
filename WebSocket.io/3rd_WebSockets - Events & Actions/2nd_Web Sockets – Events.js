
/*

There are four main Web Socket API events −

1. Open
2. Message
3. Close
4. Error

Each of the events are handled by implementing the functions like onopen, onmessage, 
onclose and onerror functions respectively.

It can also be implemented with the help of addEventListener method.
*/

/*
Open -> 
Once the connection has been established between the client and the server, 
the open event is fired from Web Socket instance. 
It is called as the initial handshake between client and server. 
The event, which is raised once the connection is established, is called onopen.

Message ->
Message event happens usually when the server sends some data. 
Messages sent by the server to the client can include plain text messages, 
binary data or images. Whenever the data is sent, 
the onmessage function is fired.

Close -> 
Close event marks the end of the communication between server and the client. 
Closing the connection is possible with the help of onclose event. 

After marking the end of communication with the help of onclose event, 
no messages can be further transferred between the server and the client. 
Closing the event can happen due to poor connectivity as well.

Error ->
Error marks for some mistake, which happens during the communication. 
It is marked with the help of onerror event. Onerror is always followed by termination of connection. 
The detailed description of each and every event is discussed in further chapters.
*/