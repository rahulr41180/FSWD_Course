
/*

The OnClose event is raised whenever a client is disconnected. 
The Client is removed from the list and informs the rest of clients about the disconnection.
*/

socket.OnClose = () => {
    // Remove the disconnected client from the list.
    clients.Remove(socket);
};