
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    console.log("Server running");
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\m");
})

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
})