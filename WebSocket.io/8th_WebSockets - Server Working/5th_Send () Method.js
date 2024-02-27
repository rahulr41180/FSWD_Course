
/*

The Send() method simply transmits the desired message to the specified client. 
Using Send(), text or binary data can be stored across the clients.

The working of OnMessage event is as follows −
*/

socket.OnMessage = () => {
    foreach(client in clients); {
        // Send the message to everyone!

        // Also, send the client connection's unique identifier in order
        // to recognize who is who.
        client.Send(client.ConnectionInfo.Id + " says: " + message);
    }
};