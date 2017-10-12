var robot = require("robotjs");
var x=13;
var y=37;


setInterval(getx_y, 333);

function getx_y( )
{
  var mouse = robot.getMousePos();
  x=mouse.x;
  y=mouse.y
  console.log("Mouse is at x:" + x + " y:" + y);
  //you can reset counter here
}







// console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);