// Create a simple http server using node. *
// This server should respond to a root-url request with a
//   file called index.html.
// Do not use ExpressJS.
// Your code should have error checking and
// at least one callback.
// Put five or more html elements in your index.html.
//   One of the elements should be a link to an external page.
//   Things to research: node.js, callbacks, the fs module, the http module.

var http = require('http');
var fs = require('fs');  //fs = file system, needed for files
var commonHeaders = {'Content-Type': 'text/html'};


var server = http.createServer(function(request, response){
  if (request.method == 'GET' && (request.url =='/index.html' || request.url == '/') ) {
    fs.readFile('index.html', function(error, page){
      response.writeHead(200, commonHeaders);
      response.write(page);
      response.end();
    });
  }
  else {
    response.writeHead(404, commonHeaders);
    response.write("Error 404 Page Not Found.");
    response.end();
  }
});
server.listen(3000);
console.log("Server is now running...");


//create a public directory any HTML file, serve it if exists if it doesnt error 404
//use the other lodash and other code challenge files.