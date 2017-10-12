$(document).ready(function(){

var element = document.createElement("div");
element.className = "ui-draggable";
element.setAttribute("id", "wheater");
//element.addEventListener( 'click', zindex('wheater'), false );
//element.addEventListener( 'ondragstart', zindex('wheater'), false );
element.appendChild(document.createTextNode(" "));
document.body.appendChild(element);

$('#wheater').weatherfeed(['LOXX0001']);
//$('#wheater').draggable();





});


function r_launch(link){
var gui = require('nw.gui');
gui.Shell.openItem(link);

}