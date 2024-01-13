
console.log("Hello World");

import express from "express";

const app = express();

app.get("/", async (req, res) => {
    try {
        return res.status(200).send({
            status : true,
            message : "Hello World"

        })
    } catch(error) {


    }
})

app.listen(8080, async () => {
    try {
        console.log("Server listening on 8080 PORT");
        return;
    } catch(error) {
        console.log('error:', error.message)


    }
})

/*

The request object(req) represents the HTTP request.
The response object represents the HTTP response.

app.listen(port, [host], [backlog], [callback]])

Port is the only required parameter here.

port : A port number on which the server should accept incoming requests.


host : Name of the domain. You need to set it when you deploy your apps to the cloud.

backlog : The maximum number of queued pending connections. The default is 511.

callback : An asynchronous function that is called when the server starts listening for requests.

*/