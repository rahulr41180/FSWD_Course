
var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify({
        status : true,
        data : "Hello World"
    }))
}).listen(8080, () => {
    console.log("Server listening on port 8080");
})