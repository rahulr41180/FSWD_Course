
// Note :

/*
What is Express?
Express is a fast, assertive, essential and moderate web framework of Node.js.
We can assume express as a layer built on the top of the Node.js 
that helps us to manage a server and routes.
*/

/* 
Features of Express.js framework :

It can be used to design single-page, multi-page and hybrid web applications.
It allows to setup middlewares to respond to HTTP Requests.
It defines a routing table which is used to perform different actions based on HTTP method and URL.
It allows to dynamically render HTML Pages based on passing arguments to templates.
*/

/* 
Why use Express
Ultra fast I/O

Asynchronous and single threaded
MVC like structure
Robust API makes routing easy
*/

/* 
How does Express look like :

*/

const express = require("express");  
const app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address;  
  console.log('host:', host);
  var port = server.address().port;  

  console.log('port:', port);
  console.log('Example app listening at http://%s:%s', host, port);  

});  