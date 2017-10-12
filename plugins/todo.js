$( document ).ready(function() {
var element = document.createElement("div");
element.className = "ui-draggable";
element.setAttribute("id", "todo");
element.appendChild(document.createTextNode(" "));
document.body.appendChild(element);
//$('#todo').draggable();


var div = document.createElement('span');
//iframe.style.display = "none";
//div.src = 'todo.html';
div.setAttribute("id", "todoframe");
div.innerHTML = "<span width='200' height='200'><span class='do' id='do'><ul id='my_list'></ul><div class='add' ><input type='text' id='todoinput'/><input type='button' onclick='return addText();' value='Add'/></div></span></span>";
document.getElementById('todo').appendChild(div);



$(document).keypress(function(e) {
    if(e.which == 13 && $("#todoinput").is(":focus")) {
        addText();
    }
});





});
function addText(){
    var input = document.getElementById('todoinput').value;
    //document.getElementById('do').innerHTML = input;
    var node=document.createElement("li");
	node.className='todoitm';
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('my_list').appendChild(node);
document.getElementById("todoinput").value = "";
return false;
}