const http = require("http");

const PORT = 3000;

console.log("PORT :", PORT);

http.createServer((req,res)=>{
  res.end("Hello Docker");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});