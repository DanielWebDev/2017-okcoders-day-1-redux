// require a dependency
var http = require('http');

const PORT=8080;

function handleRequest(require,resp) {
    resp.end('<h1>Welcome to my homepage</h1>');
}

var server = http.createServer(handleRequest);

// start our server
server.listen(PORT, function(){
    // this is a callback, get used to it now
    console.log("Server is running on: port: %s", PORT);
});