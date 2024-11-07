
/* 

The OnOpen event determines that a new client has requested to access and performs an initial handshake.

The client should be added to the list and probably the information should be stored related to it, 
such as the IP address.

Fleck provides us with such information, as well as a unique identifier for the connection.
*/

server.Start = (socket) => {

    socket.OnOpen = () => {
       // Add the incoming connection to our list.
       clients.Add(socket);
    }
     
    // Handle the other events here...
};