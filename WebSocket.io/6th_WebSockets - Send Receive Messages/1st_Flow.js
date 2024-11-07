
/*

The Message event takes place usually when the server sends some data. 
Messages sent by the server to the client can include plain text messages, binary data, or images.

The following code snippet describes opening the connection to Web Socket protocol for getting new message.
*/

webSocket.onmessage = function (e) {
    var server_message = e.data;
    console.log(server_message);

}

/*
Web socket protocol supports text and binary data only.

In terms of Javascript, text refers to as a string and server can send string data in JSON and XML formate if we will be getting data from these two formate then data should be consider as String type data.
While binary data is represented like ArrayBuffer.



Web sockets support only one binary format at a time. 
The declaration of binary data is done explicitly as follows −
*/

socket.binaryType = "arrayBuffer";
socket.binaryType = "blob";

/*
The code snippet for determining the data type as String is mentioned below −

*/

webSocket.onmessage = function (event) {
    if (typeof event.data === String) {
        console.log("Received data string");
    }
}

/*

The following code shows how to handle a JSON object and extract its properties −
*/

// This object would be send by server.
let object = {
    name: "James Devilson",
    message: "Hello World!"
}


webSocket.onmessage = function (event) {
    if (typeof event.data === String) {
        //create a JSON object
        var jsonObject = JSON.parse(event.data);
        var username = jsonObject.name;
        var message = jsonObject.message;
        console.log("Received data string");
    }
}

/*
ArrayBuffer ->

ArrayBuffers are handy to store the image files.

Receiving data using ArrayBuffers is fairly simple. 
The operator instanceOf is used instead of equal operator.

The following code shows how to handle and receive an ArrayBuffer object −

*/


webSocket.onmessage = function (event) {
    if (event.data instanceof ArrayBuffer) {
        var buffer = event.data;
        console.log("Received arraybuffer");
    }
}