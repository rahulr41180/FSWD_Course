
/*

The onerror event is fired when something wrong occurs between the communications. 
The event onerror is followed by a connection termination, which is a close event.

A good practice is to always inform the user about the unexpected error and try to reconnect them.
*/

socket.onclose = function (event) {
    console.log("Error occurred.");


    // Inform the user about the error.
    var label = document.getElementById("status-label");
    label.innerHTML = "Error: " + event;
}

/*
When it comes to error handling, you have to consider both internal and external parameters.

1. Internal parameters include errors that can be generated because of the bugs in your code, 

or unexpected user behavior.
2. External errors have nothing to do with the application; rather, they are related to parameters, 
which cannot be controlled. The most important one is the network connectivity.
*/

/* 
Checking Network Availability :
The most common way of doing so is simply making an HTTP request to a website 
that is supposed to be up (for example, http://www.google.com). 

If the request succeeds, the desktop or mobile device knows there is active connectivity. 

Similarly, HTML has XMLHttpRequest for determining network availability.

HTML5, though, made it even easier and introduced a way to check the network availability means whether the browser can accept web responses. 
This is achieved via the navigator object −
*/

if (navigator.onLine) {

    alert("You are Online");
} else {
    alert("You are Offline");
}

/*
Here is how to inform the user that the network is not available and try to reconnect 
when a WebSocket close event occurs −
*/

socket.onclose = function (event) {
    // Connection closed.
    // Firstly, check the reason.
     
    if (event.code != 1000) {
       // Error code 1000 means that the connection was closed normally.
       // Try to reconnect.
         
       if (!navigator.onLine) {
        
          alert("You are offline. Please connect to the Internet and try again.");
       }
    }
 }