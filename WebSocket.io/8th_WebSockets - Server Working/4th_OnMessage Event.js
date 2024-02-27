
/* 

The OnMessage event is raised when a client sends data to the server.

Inside this event handler, the incoming message can be transmitted to the clients, 
or probably select only some of them.

The process is simple. Note that this handler takes a string named message as a parameter −
*/

socket.OnMessage = () => {

    // Display the message on the console.
    Console.WriteLine(message);
};