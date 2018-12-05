var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

var players = {};


app.set('port', 6969);
app.use('/public', express.static(__dirname + '/public/'));


//Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/gamescreen', function(request, response) {
    response.sendFile(path.join(__dirname, 'gamescreen.html'));
});


io.on('connection', function (socketIO) {
  console.log('a user connected');

  // create a new player and add it to our players object
players[socket.id] = {
    rotation: 0,
    playerId: socket.id,
    team: (Math.floor(Math.random() * 2) == 0) ? 'white' : 'red'
  };
  // send the players object to the new player
  socket.emit('currentPlayers', players);
  // update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id]);


  socket.on('disconnect', function () {
    console.log('user disconnected');

    // remove this player from our players object
delete players[socket.id];
// emit a message to all players to remove this player
io.emit('disconnect', socket.id);
  });
});


//Start server
server.listen(6969, function(){
console.log('successful');
});

