var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);


app.set('port', 6969);


app.use('/public', express.static(__dirname + '/public/'));


// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/gamescreen', function(request, response) {
  response.sendFile(path.join(__dirname, 'gamescreen.html'));
});

// Starts the server.
server.listen(6969, function() {
  console.log('kurec');
});


io.on('connection', function(socket) {
});