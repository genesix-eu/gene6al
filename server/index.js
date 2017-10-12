setTimeout(function() {
var port=1337;

var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');
var express = require('express');
var colors = require('colors');


var app = express()
, server = require('http').createServer(app)
, io = socketio.listen(server);             // socket needs to listen on http server
 
server.listen(7331);

app.use(express.static(__dirname + '/public'));
 

 
app.listen(port, function() {
//console.log('\r\n');
console.log("Express listening on port "+ port);
 });


console.log("GPO running on port: "+port);



io.on('connection', function(socket){
var sessionid = socket.id;
//console.log("Connection".green);
//console.log(sessionid.yellow);
console.log("Connection sessionid: "+sessionid);



socket.on('to_all', function (data) {
//console.log(data);
socket.broadcast.emit('to_all' , data);
});
socket.on('to_main', function (data) {
//console.log(data);
socket.broadcast.emit('to_main',data);
//socket.broadcast.emit(data);
});




  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});

// var robot = require("robotjs");
// var x=13;
// var y=37;

// setInterval(getx_y, 333);

// function getx_y( )
// {
//   var mouse = robot.getMousePos();
//   x=mouse.x;
//   y=mouse.y;
//   //console.log("Mouse is at x:" + x + " y:" + y);
//   //you can reset counter here
//   if (x===0 && y===0){
//   	var win = gui.Window.get();
//   	win.focus();
//   }
// }



}, 800);

