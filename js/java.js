var os = require('os');
var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var force_portable=1;



var my_os_type = os.type();
console.log("OS type is: " + my_os_type);

if (my_os_type === "Linux" && force_portable==0) {
	var my_home_folder = process.env['HOME'];
	var my_cfg_folder=my_home_folder+'/Gene6/Launcher';
	var my_icons_folder=my_home_folder+'/Gene6/Launcher/icons/';
	var my_css_folder=my_home_folder+'/Gene6/Launcher/css/';
	var my_cfg_file=my_cfg_folder+'/config.js';
	var my_json_file=my_cfg_folder+'/data.json';
	var temp_dir = process.cwd();
}
else if (my_os_type==="Windows_NT"  && force_portable==0){
	var my_home_folder=process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
	my_home_folder=my_home_folder.replace(/\\/g,"/");
	var my_cfg_folder=my_home_folder+'/Gene6/Launcher';
	var my_icons_folder=my_home_folder+'/Gene6/Launcher/icons/';
	var my_css_folder=my_home_folder+'/Gene6/Launcher/css/';
	var my_cfg_file=my_cfg_folder+'/config.js';
	var my_json_file=my_cfg_folder+'/data.json';
	var temp_dir = process.cwd();
}
else if (force_portable==1 && my_os_type==="Windows_NT"){
  var temp_dir = process.cwd();
  temp_dir=temp_dir.replace(/\\/g,"/");
  // var my_home_folder=temp_dir+"/default";
  // var my_cfg_folder=my_home_folder+'/Gene6/Launcher';
  // var my_icons_folder=my_home_folder+'/Gene6/Launcher/icons/';
  // var my_css_folder=my_home_folder+'/Gene6/Launcher/css/';
  // var my_cfg_file=my_cfg_folder+'/config.js';
  // var my_json_file=my_cfg_folder+'/data.json';
  var my_home_folder=temp_dir+"/data";
  var my_cfg_folder=my_home_folder+'/local';
  var my_icons_folder=my_home_folder+'/local/icons/';
  var my_css_folder=my_home_folder+'/local/css/';
  var my_cfg_file=my_cfg_folder+'/config.js';
  var my_json_file=my_cfg_folder+'/data.json';
}
else if (force_portable==1 && my_os_type==="Linux"){
  var temp_dir = process.cwd();
  var my_home_folder=temp_dir+"/default";
  var my_cfg_folder=my_home_folder+'/Gene6/Launcher';
  var my_icons_folder=my_home_folder+'/Gene6/Launcher/icons/';
  var my_css_folder=my_home_folder+'/Gene6/Launcher/css/';
  var my_cfg_file=my_cfg_folder+'/config.js';
  var my_json_file=my_cfg_folder+'/data.json';
}


//console.log(temp_dir);
var widgets = new Array();
widgets.push("wheater");
widgets.push("todo");
widgets.push("audio_player");



function first_init(){

if (localStorage.setting_has_been_set) {

bgr = Number(localStorage.bgr);
bgg = Number(localStorage.bgg);
bgb = Number(localStorage.bgb);
bga = Number(localStorage.bga);
dev_mode = Number(localStorage.dev_mode);
pp_mode = Number(localStorage.pp_mode);
colombo = Number(localStorage.colombo);
all_widgets = Number(localStorage.all_widgets);
cmd = Number(localStorage.cmd);
e3dlogo = Number(localStorage.e3dlogo);
motivation = Number(localStorage.motivation);
loaded = Number(localStorage.loaded);
theme_mode = Number(localStorage.theme_mode);
sortable = Number(localStorage.sortable);
auto_widht_height = Number(localStorage.auto_widht_height);
auto_move = Number(localStorage.auto_move);
hide_seek = Number(localStorage.hide_seek);
cfg_ver = localStorage.cfg_ver;

switch (theme_mode) {
    case 1:
        sortable=1;
    auto_widht_height=1;
    css_theme_name='one_line';
        break;
    case 2:
        sortable=0;
    auto_widht_height=1;
        css_theme_name='two_line_grid';
    break;
    case 3:
        sortable=2;
    auto_widht_height=3;
        css_theme_name='unit_ed';
        break;
    case 4:
        sortable=2;
    auto_widht_height=3;
        css_theme_name='unit_ed_no_text';
        break;
    case 5:
        sortable=1;
    auto_widht_height=5;
    css_theme_name='one_line_no_text';
        break;
    case 6:
        sortable=1;
        auto_widht_height=1;
        css_theme_name='one_line_no_bg';
        break;
    case 7:
        sortable=1;
        auto_widht_height=5;
        css_theme_name='one_line_no_text_no_bg';
        break;
    case 8:
        sortable=2;
        auto_widht_height=3;
        css_theme_name='unit_ed_no_bg';
        break;
    case 9:
        sortable=2;
        auto_widht_height=3;
        css_theme_name='unit_ed_no_text_no_bg';
        break;
    case 10:
        sortable=1;
        auto_widht_height=5;
        css_theme_name='one_line_no_text_no_bg_4K';
        break;
    case 11:
        sortable=1;
        auto_widht_height=5;
        auto_move=2;
        css_theme_name='wannabe_b';
        break;
    case 12:
        sortable=0;
        auto_widht_height=6;
        css_theme_name='unit_ed_pro';
        break;
}

$("head").append('<link rel="stylesheet" type="text/css" href="file:///' + my_css_folder + css_theme_name + '.css">');
} else {
//Set Default Settings
save_default_settings()
}

}


function save_default_settings(){
localStorage.bgr = 0;
localStorage.bgg = 0;
localStorage.bgb = 0;
localStorage.bga = 0;
localStorage.dev_mode = 1;
localStorage.pp_mode = 1;
localStorage.colombo = 0;
localStorage.all_widgets = 0;
localStorage.cmd = 0;
localStorage.e3dlogo = 0;
localStorage.motivation = 0;
localStorage.loaded = 1;
localStorage.theme_mode = 9;
localStorage.sortable = 0;
localStorage.auto_widht_height = 1;
localStorage.auto_move = 1;
localStorage.hide_seek = 1;
localStorage.cfg_ver = 0.30;
localStorage.setting_has_been_set = true;
first_init();
}





first_init();
























var json = require(my_json_file);
var myicons=json;
//console.log(myicons);


//throw new Error("Something went badly wrong!");









if (typeof dev_mode === 'undefined') {
dev_mode=0;


}





$(document).ready(function(){
setTimeout(function() {
socket = io.connect('http://localhost:7331');





socket.on('to_main', function(msg){
console.log(msg);

if (msg === "reload"){
  setTimeout(function(){ win.reload(); }, 500);
}else if (msg === "save_order_call_home"){

  save_order();
}
});

// if (theme_mode==2 || theme_mode==7 || theme_mode==9 || theme_mode==10 || theme_mode==11){
if (theme_mode){
$( ".icon" ).click(function() {
//var win = gui.Window.get();
if (win.setAlwaysOnTop && hide_seek === 1) {
win.setAlwaysOnTop(false);
win.hide();
// console.log("Always On Top: OFF");
}

$(this).rotate();
});
}
}, 200);






if (!window.screenTop && !window.screenY) {

toggle_inline('settings');
}


document.getElementById('icons').style.backgroundColor = 'rgba('+bgr+','+bgg+','+bgb+',' + bga + ')';
//document.getElementById('settings').style.backgroundColor = 'rgba('+bgr+','+bgg+','+bgb+',' + bga + ')';
//var e = $('#icons');
//$(e).css('background-color', 'rgba('+bgr+','+bgg+','+bgb+',' + bga + ')');​



if(bgr+bgg+bgb<200 || bga<0.4){
//document.getElementById('settings').style.color = "silver";
}else {
//document.getElementById('settings').style.color = "black";
}






//var desired_width=$("#icons").width();
//$('#control').css("width",desired_width);

if(theme_mode==2){
var icons_row_amount=myicons.length/2;
icons_row_amount_new=Math.ceil(icons_row_amount);
if (isInt(icons_row_amount)){
document.getElementById("icons").style.width = (icons_row_amount_new*76)+48+"px";

}else{
document.getElementById("icons").style.width = (icons_row_amount_new*76)+10+"px";
}
}else if(theme_mode==1 || theme_mode==6 ){
var icons_row_amount=myicons.length;
document.getElementById("icons").style.width = icons_row_amount*106+"px";
}else if(theme_mode==5 || theme_mode==7){
var icons_row_amount=myicons.length;
document.getElementById("icons").style.width = icons_row_amount*98+"px";
}else if(theme_mode==10){
var icons_row_amount=myicons.length;
document.getElementById("icons").style.width = icons_row_amount*194+"px";
}
else if(theme_mode==12){
var icons_row_amount=myicons.length;
document.getElementById("icons").style.width = 388+"px";
}

myicons.forEach(function(entry) {

$("#iconsul").append('<li><span class="icon '+entry.id+'" id="'+entry.id+'" onclick="run_command('+"'"+entry.do_command+"','"+entry.do_type+"'"+');">'+entry.name+'</span></li>');


//sheet.insertRule("."+entry.id+" { background: url('file:"+my_icons_folder+entry.icon_name+"'); background-size:96px 96px; background-repeat:no-repeat; background-position:center; }", 0);
//sheet.insertRule("."+entry.id+" { background: url('file:"+my_icons_folder+entry.icon_name+"'); background-size:96px 96px; background-repeat:no-repeat; background-position:center 5px;; }", 0);


switch (theme_mode) {
case 1:
case 3:
case 4:
case 6:
case 8:
case 12:
sheet.insertRule("."+entry.id+" { background: url('file:"+my_icons_folder+entry.icon_name+"') no-repeat center top; background-size:96px 96px; }", 0);

break;
case 2:
case 5:
case 7:
case 9:
case 11:
sheet.insertRule("."+entry.id+" { background: url('file:"+my_icons_folder+entry.icon_name+"') no-repeat center center; background-size:96px 96px; }", 0);

break;
case 10:
sheet.insertRule("."+entry.id+" { background: url('file:"+my_icons_folder+entry.icon_name+"') no-repeat center center; background-size:192px 192px; }", 0);

break;
}


});
  


if (sortable==1){
$( "#iconsul" ).sortable({
axis: "x",
update: function( event, ui ) {check_order();}
});
}else if(sortable==2)
{
$( "#iconsul" ).sortable({
axis: "y",
update: function( event, ui ) {check_order();}
});
  }


var my_usb_tag="usb.tag";
var my_drive_arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

my_drive_arr.forEach(function(entry) {
//console.log(entry);
if (fs.existsSync(entry+':/'+my_usb_tag)) {
//var my_usb_drive=entry;
$( "#portable_drive" ).html( "Portable Drive: "+entry );
}
});




resize_window();
setTimeout(function(){ enable_scroll(); }, 1000);

});



function enable_scroll(){
var icons_wrapper_width=$('#wrapper').css('width');
var icons_div_width=$('#icons').css('width');


icons_wrapper_width=parseInt(icons_wrapper_width);
icons_div_width=parseInt(icons_div_width);



if(icons_div_width>icons_wrapper_width){
  

$("#wrapper").mousewheel(function(event, delta) {
this.scrollLeft -= (delta * 70);
event.preventDefault();
});
}
  
}




function isInt(n){
        return Number(n)===n && n%1===0;
}

function  color_update(){
document.getElementById("save_bg_color").style.display = "inline-block";
new_bgr = document.getElementById('bgr').value;
new_bgr = parseInt(new_bgr);
new_bgg = document.getElementById('bgg').value;
new_bgg = parseInt(new_bgg);
new_bgb = document.getElementById('bgb').value;
new_bgb = parseInt(new_bgb);
new_bga = document.getElementById('bga').value;



document.getElementById('icons').style.backgroundColor = 'rgba('+new_bgr+','+new_bgg+','+new_bgb+',' + new_bga + ')';
//document.getElementById('settings').style.backgroundColor = 'rgba('+new_bgr+','+new_bgg+','+new_bgb+',' + new_bga + ')';



if(new_bgr+new_bgg+new_bgb<200 || new_bga<0.4){
//document.getElementById('settings').style.color = "silver";
}else {
//document.getElementById('settings').style.color = "black";
}

}

function save_bg_color(){
change_settings('bgr', new_bgr);
setTimeout(function(){ change_settings('bgg', new_bgg); }, 700);
setTimeout(function(){ change_settings('bgb', new_bgb); }, 1400);
setTimeout(function(){ change_settings('bga', new_bga); }, 2100);


document.getElementById("save_bg_color").style.display = "none";
}



function check_order(){
var html_count = $("#iconsul li").length;
var json_count = myicons.length;
var html_name = $( "#iconsul li:nth-child("+html_count+")" ).children().attr('id');



for (index = 0; index < myicons.length; ++index) {

var inxplus =index+1;
var json_name = myicons[index].id;
var html_name = $( "#iconsul li:nth-child("+inxplus+")" ).children().attr('id');

//alert(json_name +' - '+html_name);
if (json_name!=html_name){
$('#save_order').css("background-color","red");
$('#save_order').css("display","table-cell");
socket.emit('to_all', 'save_order');
}

}

}


function save_order(){
var html_count = $("#iconsul li").length;
var json_count = myicons.length;


//myicons[html_count-1].name


//var html_name = $( "#iconsul" ).children().children().attr('id');
//var html_name = $( "#iconsul" ).children().find( "span" ).attr('id');
var html_name = $( "#iconsul li:nth-child("+html_count+")" ).children().attr('id');



//alert(html_count + json_count);
//alert(html_name);



for (index = 0; index < myicons.length; ++index) {
//console.log(myicons[index].name);
var inxplus =index+1;
var json_name = myicons[index].id;
var html_name = $( "#iconsul li:nth-child("+inxplus+")" ).children().attr('id');

//alert(json_name +' - '+html_name);
if (json_name!=html_name){
var current_indx=index;
var desired_indx;
  


for (i = 0; i < myicons.length; ++i) {
if(myicons[i].id==html_name){desired_indx=i}
}







  
  
//alert(json_name+current_indx+desired_indx+html_name);
swap(myicons, current_indx, desired_indx);
//console.log(myicons);
var json_text = JSON.stringify(myicons, null, 2);
var fs = require('fs');
fs.writeFile(my_json_file, json_text, function(err) {
    if(err) {
        alert("error");
    }
});




}


}



$('#save_order').css("display","none");
}


var swap = function(theArray, indexA, indexB) {
    var temp = theArray[indexA];
    theArray[indexA] = theArray[indexB];
    theArray[indexB] = temp;
};


function run_command(command, type ){

if (type==1){

gui.Shell.openItem(command);

if (my_os_type === "Linux" && command.indexOf('.') == -1) {

var sys = require('sys')
var exec = require('child_process').exec;
var child;

// executes `pwd`
child = exec(command, function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

}



}else if (type==2){
window[command]();
}else if (type==3){
my_usb_tag="usb.tag";
my_drive_arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

my_drive_arr.forEach(function(entry) {
//console.log(entry);
if (fs.existsSync(entry+':/'+my_usb_tag)) {
my_usb_drive=entry;
my_usb_command = setCharAt(command,0,my_usb_drive);
//alert(my_usb_command);
gui.Shell.openItem(my_usb_command);
//console.log('usb drive found: '+my_usb_drive);
}
});




}else if (type==4){
var sys = require('sys')
var exec = require('child_process').exec;
var child;

// executes `pwd`
child = exec(command, function (error, stdout, stderr) {
  //sys.print('stdout: ' + stdout);
  //sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});



}else if (type==5){
gui.Shell.openExternal(command);

}
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


function testo(){









}

var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

// Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();
  
  
function check_Form() {

var x = document.getElementById('my_input_name').value
var y = document.getElementById('my_input_icon').value
y=y.replace(/\\/g,"/");
var y_file_name=y.split(/(\\|\/)/g).pop()
var z = document.getElementById('my_input_app').value
z=z.replace(/\\/g,"/");
var z_file_name=z.split(/(\\|\/)/g).pop()

var x_normalized = $.trim(x);
x_normalized=x_normalized.replace(/\s+/g, '_').toLowerCase();
x_normalized=x_normalized.replace(/[0-9]/g, '');

if (x && y && z) {
//document.getElementById("add_icon").disabled = false;
//$('#add_icon_row').css("display","table-row");
$('#add_icon_cell').css("display","table-cell");
}

}

function select_theme(){
var e = document.getElementById("theme_select");
var theme_indx = e.options[e.selectedIndex].value;
localStorage.theme_mode = theme_indx;
//change_settings('theme_mode', theme_indx);
setTimeout(function(){ win.reload(); }, 1000);
  
}



function add_icon(){
  
var x = document.getElementById('my_input_name').value;
var y = document.getElementById('my_input_icon').value;
//var t = document.getElementById('my_app_type').value;
var t = document.getElementById('my_app_type').value;


var y_cmd = y;

var my_icons_folder_cmd = my_icons_folder;
if (my_os_type==="Windows_NT") {my_icons_folder_cmd = my_icons_folder_cmd.replace(/\//g, '\\');}






y=y.replace(/\\/g,"/");
var y_file_name=y.split(/(\\|\/)/g).pop()
var z = document.getElementById('my_input_app').value
z=z.replace(/\\/g,"/");
var z_file_name=z.split(/(\\|\/)/g).pop()

var x_normalized = $.trim(x);
x_normalized=x_normalized.replace(/[0-9]/g, '');
x_normalized = $.trim(x_normalized);
x_normalized=x_normalized.replace(/\s+/g, '_').toLowerCase();

  

var new_icon = {};
new_icon.name = x;
new_icon.id = x_normalized;
new_icon.icon_name = y_file_name;
new_icon.do_command = z;
new_icon.do_type = t;
myicons.push(new_icon);
var json_text = JSON.stringify(myicons, null, 2);
var fs = require('fs');
fs.writeFile(my_json_file, json_text, function(err) {
    if(err) {
        alert("error");
    }
});

if (my_os_type==="Windows_NT") {var cmd_command='copy "'+y_cmd+'" "'+my_icons_folder_cmd+'"';}
else if (my_os_type === "Linux") {var cmd_command = 'rsync -avz  "'+y_cmd+'" "'+my_icons_folder_cmd+'"';}


var cpm = require('child_process');
cpm.exec(cmd_command);
////////////////////////////////////////////////
document.getElementById('my_input_name').value='';
document.getElementById('my_input_icon').value='';
document.getElementById('my_input_app').value='';

$('#add_icon_cell').css("display","none");
setTimeout(function(){ reload_icons(); }, 1000);
resize_window();

}






function resize_window(){
var my_win_height = window.screen.availHeight;
var my_win_width = window.screen.availWidth;
document.getElementById("wrapper").style.maxWidth = my_win_width+"px";
if (auto_widht_height===3){
document.getElementById("wrapper").style.maxWidth = 108+"px";
document.getElementById("wrapper").style.maxHeight = my_win_height+"px";
my_win_height3=parseInt(my_win_height);
win.resizeTo(100, my_win_height3);
if (auto_move==1){win.moveTo(1, 1);}

}else if (auto_widht_height==1){
var desired_width = $( '#icons' ).width();
var desired_height = $( '#icons' ).height();

var x=(window.screen.availWidth/2)-(desired_width/2);
var y=(window.screen.availHeight/2)-(desired_height/2);
x=parseInt(x);
y=parseInt(y);
if(x<0){x=0;}
if (theme_mode==1){
//desired_height=desired_height-16;
}


win.resizeTo(desired_width, desired_height);
if (auto_move==1){win.moveTo(x, y);}

}else if (auto_widht_height==5){
var desired_width = $( '#icons' ).width();
var desired_height = $( '#icons' ).height();

var x=(window.screen.availWidth/2)-(desired_width/2);
var y=(window.screen.availHeight/2)-(desired_height/2);
x=parseInt(x);
y=parseInt(y);
if(x<0){x=0;}
if (theme_mode==11){
var how_many_icons = $('.icon').length;
desired_width=(how_many_icons*104)
}


win.resizeTo(desired_width+20, desired_height);
if (auto_move==1){win.moveTo(x, y);}
else if (auto_move==2){
  var x=(window.screen.availWidth/2)-(desired_width/2);
  var y=(window.screen.availHeight)-(desired_height);
  x=parseInt(x);
  y=parseInt(y);
  if(x<0){x=0;}
  win.moveTo(x, y);}

}else if (auto_widht_height==6){
document.getElementById("wrapper").style.maxWidth = 216+"px";
document.getElementById("wrapper").style.maxHeight = my_win_height+"px";
my_win_height3=parseInt(my_win_height);
win.resizeTo(200, my_win_height3);
if (auto_move==1){win.moveTo(1, 1);}


}
}

  
function reload_icons(){
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();
win.reload();
}
  
  
function delete_icon(){
var e = document.getElementById("delete_icon_selection");
var delete_icon_indx = e.options[e.selectedIndex].value;


myicons.splice(delete_icon_indx, 1);
var win = gui.Window.get();

var json_text = JSON.stringify(myicons, null, 2);
var fs = require('fs');
fs.writeFile(my_json_file, json_text, function(err) {
    if(err) {
        alert("error");
    }
});




win.reload();
resize_window();
}
  
  
function app_type_select(){
var e = document.getElementById("app_type_select");
var my_app_indx = e.options[e.selectedIndex].value;
  

if(my_app_indx==1){
document.getElementById("type_of_selection").innerHTML = '<input id="my_input_app"   type="file" onchange="check_Form();" />  <input type="hidden" id="my_app_type" value="1">';
}else if (my_app_indx==2){
document.getElementById("type_of_selection").innerHTML = '<input id="my_input_app"   type="file" onchange="check_Form();"  nwdirectory /> <input type="hidden" id="my_app_type" value="1">';
}else if (my_app_indx==3){
document.getElementById("type_of_selection").innerHTML = '<input id="my_input_app" placeholder="Ctrl+V"  type="text" onchange="check_Form();" />  <input type="hidden" id="my_app_type" value="1">';
}else if (my_app_indx==4){
document.getElementById("type_of_selection").innerHTML = '<input id="my_input_app" placeholder=""  type="text" onchange="check_Form();" />  <input type="hidden" id="my_app_type" value="2">';
}else if(my_app_indx==5){
document.getElementById("type_of_selection").innerHTML = '<input title="read readme.txt for more info" id="my_input_app"   type="file" onchange="check_Form();" />  <input type="hidden" id="my_app_type" value="3">';
}else if (my_app_indx==6){
document.getElementById("type_of_selection").innerHTML = '<input title="read readme.txt for more info" id="my_input_app"   type="file" onchange="check_Form();"  nwdirectory /> <input type="hidden" id="my_app_type" value="3">';
}
  
}



function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function change_settings(contrl_itm, my_value){
window[contrl_itm]=my_value;

fs.readFile(my_cfg_file, 'utf-8', function (error, contents) {  

var my_cfg_before=contents.substring(0, contents.indexOf(contrl_itm)+contrl_itm.length+1);
var cont_wo_before=contents.substring(my_cfg_before.length);
var my_cfg_after=cont_wo_before.substring(cont_wo_before.indexOf(';'))

//alert(my_cfg_before+my_value+my_cfg_after);

fs.writeFile(my_cfg_file, my_cfg_before+my_value+my_cfg_after);

});
}



function toggle(id) {
var e = document.getElementById(id);
if(e.style.display == 'block')
  e.style.display = 'none';
else
  e.style.display = 'block';
}

function toggle_inline(id) {
var e = document.getElementById(id);
if(e.style.display == 'inline-block')
  e.style.display = 'none';
else
  e.style.display = 'inline-block';
}

function display(id){
var e = document.getElementById(id);
e.style.display = 'block';
}

function dontdisplay(id){
var e = document.getElementById(id);
e.style.display = 'none';
}

function open_all_widgets(){

var avl_height = window.screen.availHeight;
var avl_width = window.screen.availWidth;


if (!x || !y){
var x=avl_width-320;
var y=50;
}else{

}

widgets.forEach(function(entry) {
var win = gui.Window.open('plugins/'+entry+'.html', {
  position: 'center',
  width: 280,
  height: 160,
  frame:false,
  toolbar:false,
  transparent:true,
  resizable:false
});
//alert(x+'x'+y);
win.moveTo(x, y);
win.setShowInTaskbar(false);
y+=190;
});


}

/*
jQuery-Rotate-Plugin v0.2 by anatol.at
http://jsfiddle.net/Anatol/T6kDR/
*/
$.fn.rotate=function(options) {
  var $this=$(this), prefixes, opts, wait4css=0;
  prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
  opts=$.extend({
    startDeg: false,
    endDeg: 360,
    duration: 1,
    count: 1,
    easing: 'linear',
    animate: {},
    forceJS: false
  }, options);

  function supports(prop) {
    var can=false, style=document.createElement('div').style;
    $.each(prefixes, function(i, prefix) {
      if (style[prefix.replace(/\-/g, '')+prop]==='') {
        can=true;
      }
    });
    return can;
  }

  function prefixed(prop, value) {
    var css={};
    if (!supports.transform) {
      return css;
    }
    $.each(prefixes, function(i, prefix) {
      css[prefix.toLowerCase()+prop]=value || '';
    });
    return css;
  }

  function generateFilter(deg) {
    var rot, cos, sin, matrix;
    if (supports.transform) {
      return '';
    }
    rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
    cos=Math.cos(rot);
    sin=Math.sin(rot);
    matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
    return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
  }

  supports.transform=supports('Transform');
  supports.transition=supports('Transition');

  opts.endDeg*=opts.count;
  opts.duration*=opts.count;

  if (supports.transition && !opts.forceJS) { // CSS-Transition
    if ((/Firefox/).test(navigator.userAgent)) {
      wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
    }
    $this.queue(function(next) {
      if (opts.startDeg!==false) {
        $this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
      }
      setTimeout(function() {
        $this
          .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
          .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
          .css(opts.animate);
      }, wait4css);

      setTimeout(function() {
        $this.css(prefixed('transition'));
        if (!opts.persist) {
          $this.css(prefixed('transform'));
        }
        next();
      }, (opts.duration*1000)-wait4css);
    });

  } else { // JavaScript-Animation + filter
    if (opts.startDeg===false) {
      opts.startDeg=$this.data('rotated') || 0;
    }
    opts.animate.perc=100;

    $this.animate(opts.animate, {
      duration: opts.duration*1000,
      easing: $.easing[opts.easing] ? opts.easing : '',
      step: function(perc, fx) {
        var deg;
        if (fx.prop==='perc') {
          deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
          $this
            .css(prefixed('transform', 'rotate('+deg+'deg)'))
            .css('filter', generateFilter(deg));
        }
      },
      complete: function() {
        if (opts.persist) {
          while (opts.endDeg>=360) {
            opts.endDeg-=360;
          }
        } else {
          opts.endDeg=0;
          $this.css(prefixed('transform'));
        }
        $this.css('perc', 0).data('rotated', opts.endDeg);
      }
    });
  }

  return $this;
};

var robot = require("robotjs");
var x=13;
var y=37;

setInterval(getx_y, 200);

function getx_y( )
{
  if (hide_seek === 1) {
  var mouse = robot.getMousePos();
  x=mouse.x;
  y=mouse.y;
  x_off = window.screen.availWidth-20;
 //console.log("Mouse is at x:" + x + " y:" + y);
  //you can reset counter here
  if (x===0 && y===0){
    //var win = gui.Window.get();
    // win.setAlwaysOnTop=true;
    // win.restore();
    // win.show();
    // win.enterKioskMode();
    //win.focus();
    win.setAlwaysOnTop(true);
    win.show();
    // win.blur();
    // win.setAlwaysOnTop=false;
    // console.log("Always On Top: ON");
  }
  else if ( win.isAlwaysOnTop && x > x_off ){
    win.setAlwaysOnTop(false);
    win.hide();
    // console.log("Always On Top: OFF");
  }
  }

}