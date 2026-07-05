
const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
    res.end("Hello From Project Two");
}).listen(PORT, () => {
    console.log('Server is listening on Port :', PORT);
})




// docker build -t 2nd_entrypoint-vs-comd