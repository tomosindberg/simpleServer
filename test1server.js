var http = require('http');
var fs = require('fs');  //fs = file system, needed for files
var connect = require('connect');

var app = connect();

app.use(doFirst);
app.use(doSecond);

function doFirst(request, response, next) {
  console.log("bacon");
  next();
}
function doSecond(request, response, next) {
  console.log("Second bacon");
  next();
}

//404 response
function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/html"});
  response.write("Error 404: Page not found!  Go back to localhost:8888");
  response.end();
}

//Handel a user request
function onRequest(request, response) {

  if (request.method == 'GET'  && request.url == '/') {     // '/' = home page
    response.writeHead(200, {"Content-Type": "text/html"});  //code 200 = OK send back html page
    // response.write("Here is a response");
    // response.end();
    fs.createReadStream("./index.html").pipe(response);   //fs sends back index.html
  }
  else {
    send404Response(response);
    // response.writeHead(404, {"Content-Type": "test/html"});
    // response.write("Error 404 Page Not Found.");
    // response.end();
  }

}

http.createServer(app).listen(8888);
console.log("Server is now running....");   //shows message on the server in Terminal


