
$( document ).ready(function() {

setTimeout(function(){$("#command_input").focus();},1337);

$(document).keypress(function(e) {
    if(e.which == 13 && $("#command_input").is(":focus")) {
        cmd($('#command_input').val());
        $('#command_input').val("");
    }
});






});








var spawn = require('child_process').exec;
function cmd(comm)
{
//what = document.getElementById("commandform")
//comm = what.value;


old_data="";

    

if (comm == null || comm == '')
{
list  = spawn('cmd', ['/K']);
//list.stdin.write('prompt $+');
}
else if (comm === 'exit')
{
list.stdin.end();
}

else
{
//console.log(comm);

list.stdin.write(comm+'\r\n');

}

list.stdout.on('data', function (data) {

if (old_data!=data){
console.log(data+" ");
$('<textarea class="comm">'+data+'</textarea>').insertAfter('.comm:last');
// alert(old_data);
// alert(data);
textAreaAdjust();
old_data=data;
}
});

list.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

list.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});

return false;
}

function textAreaAdjust() {

	$('.comm:last').height(1);
	var o = $('.comm:last').prop('scrollHeight');
	var p = $('.comm:last').height();
	$('.comm:last').height( p + o );
	 scroll_check();
	
};

function scroll_check(){

//$('#terminalw').scrollTop($('#terminalw')[0].scrollHeight);
// $('#terminalw').scrollTo('#teminalw_end');
$('#terminalw').animate({scrollTop: $('#terminalw')[0].scrollHeight}, 1000);
}
