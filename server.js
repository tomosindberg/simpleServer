// Create a simple http server using node. *
// This server should respond to a root-url request with a
//   file called index.html.
// Do not use ExpressJS.
// Your code should have error checking and
// at least one callback.
// Put five or more html elements in your index.html.
//   One of the elements should be a link to an external page.
//   Things to research: node.js, callbacks, the fs module, the http module.

var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1> This is a Simple Server!</h1>");
  response.end();
}).listen(3000);
console.log("Server is now running...");