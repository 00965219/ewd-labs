// Load the http module to create an http server.
var http = require('http');
// Load the greeting module to provide the greeting.
var greeting = require('./greeting');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting.english());
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8001/");
Now create a new file called 'greeting.js' in the same folder with the following content:
//Greeting in English
exports.english = function(){
    return "Hello World!";
}
//Greeting in French
exports.french = function(){
    return "Bonjour tout le Monde!";
}