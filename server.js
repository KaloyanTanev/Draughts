var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);


app.use('/public',express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/gamescreen',function(req,res){
  res.sendFile(__dirname+'/gamescreen.html');
});


server.listen(6969,function(){ 
  console.log('Server runing');
});


server.lastPlayderID = 0; 

io.on('connection',function(socket){
    socket.on('newplayer',function(){
        socket.player = {
            id: server.lastPlayderID++,
            x: randomInt(100,400),
            y: randomInt(100,400)
        };
        socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('newplayer',socket.player);

        socket.on('disconnect',function(){
          io.emit('remove',socket.player.id);
      });
    });
});

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

if(io.readyState === io.OPEN){
  console.log('WebSocket on');
}