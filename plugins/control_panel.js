var fs = require('fs');
var os = require('os');
var my_os_type = os.type();
var force_portable=1;
theme_mode = Number(localStorage.theme_mode);
dev_mode = Number(localStorage.dev_mode);
hide_seek = Number(localStorage.hide_seek);

if (my_os_type==="Windows_NT" && force_portable==0) {
var my_home_folder=process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
my_home_folder=my_home_folder.replace(/\\/g,"/");}
else if (my_os_type === "Linux" && force_portable==0) {
var my_home_folder = process.env['HOME'];}
else if (force_portable==1 && my_os_type==="Windows_NT"){
var temp_dir = process.cwd();
temp_dir=temp_dir.replace(/\\/g,"/");
// var my_home_folder=temp_dir+"/default";
var my_home_folder=temp_dir+"/data";
}
else if(force_portable==1 && my_os_type === "Linux"){
var temp_dir = process.cwd();
var my_home_folder=temp_dir+"/default";
}

//console.log(my_home_folder);

var my_ui_cfg_folder=my_home_folder+'/local';
var my_ui_cfg_file=my_ui_cfg_folder+'/gene6ui-cfg.js';


var my_al_cfg_folder=my_home_folder+'/local';
var my_al_icons_folder=my_home_folder+'/local/icons/';
var my_al_css_folder=my_home_folder+'/local/css/';
var my_al_cfg_file=my_al_cfg_folder+'/config.js';
var my_al_json_file=my_al_cfg_folder+'/data.json';
var al_json = require(my_al_json_file);
var my_al_icons=al_json;

var temp_dir = process.cwd();
var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');


if (fs.existsSync(my_al_cfg_file)) {
$("head").append('<script type="text/javascript" src="' +'file:///'+ my_al_cfg_file + '"></script>');
}

// if (fs.existsSync(my_ui_cfg_file)) {
// $("head").append('<script type="text/javascript" src="' +'file:///'+ my_ui_cfg_file + '"></script>');
// }





$(document).ready(function(){
$("#bg1_b1").addClass("custom_button_color1_active");
$("#bg2_b1").addClass("custom_button_color1_active");
$(".btn-group-vertical > .btn").click(function(){
    $(this).addClass("custom_button_color1_active").siblings().removeClass("custom_button_color1_active");
});
$(".btn-group > .btn").click(function(){
    $(this).addClass("custom_button_color1_active").siblings().removeClass("custom_button_color1_active");
});


socket = io.connect('http://localhost:7331');
socket.on('to_all', function(msg){
console.log(msg);

if (msg === "save_order"){
$( "#save_order" ).show();
}
});
control();


// Load icons dock background color input values from config
bgr = Number(localStorage.bgr);
bgg = Number(localStorage.bgg);
bgb = Number(localStorage.bgb);
bga = Number(localStorage.bga);


document.getElementById('bgr').value=bgr;
document.getElementById('bgg').value=bgg;
document.getElementById('bgb').value=bgb;
document.getElementById('bga').value=bga;

var my_usb_tag="usb.tag";
var my_drive_arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

my_drive_arr.forEach(function(entry) {
//console.log(entry);
if (fs.existsSync(entry+':/'+my_usb_tag)) {
//var my_usb_drive=entry;
$( "#portable_drive" ).html( "Portable Drive: "+entry );
}
});




$('body').on('focus', '[contenteditable]', function() {
    var $this = $(this);
    $this.data('before', $this.html());
    return $this;
}).on('blur keyup paste input', '[contenteditable]', function() {
    var $this = $(this);
    if ($this.data('before') !== $this.html()) {
        $this.data('before', $this.html());
        $this.trigger('change');
    }
    return $this;
});

});






function control(){
	focus('control');


$( "#control_settings_2_1" ).html('');


if (typeof dev_mode === 'undefined') {
dev_mode=0;
}
if (typeof pp_mode === 'undefined') {
pp_mode=0;
}
if (typeof colombo === 'undefined') {
colombo=0;
}






	

	
if(dev_mode == 1){
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Dev mode: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="dev_mode" name="check" checked /><label for="dev_mode"></label></div></td></tr>' );	
}
else{
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Dev mode: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="dev_mode" name="check" /><label for="dev_mode"></label></div></td></tr>' );
	}
  
/*if(pp_mode == 1){
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Portable Mode: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="pp_mode" name="check" checked /><label for="pp_mode"></label></div></td></tr>' ); 
}
else{
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Portable Mode: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="pp_mode" name="check" /><label for="pp_mode"></label></div></td></tr>' );
  }*/
    
// if(colombo == 1){
// $( "#control_settings_2_1" ).append( '<tr><td class="w250"> Enable Colombo: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="colombo" name="check" checked /><label for="colombo"></label></div></td></tr>' ); 
// }
// else{
// $( "#control_settings_2_1" ).append( '<tr><td class="w250"> Enable Colombo: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="colombo" name="check" /><label for="colombo"></label></div></td></tr>' );
//   }	


if(hide_seek == 1){
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Hide & Seek: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="hide_seek" name="check" checked /><label for="hide_seek"></label></div></td></tr>' ); 
}
else{
$( "#control_settings_2_1" ).append( '<tr><td class="w250"> Hide & Seek: </td><td> <div class="slideThree"> <input type="checkbox" value="None" id="hide_seek" name="check" /><label for="hide_seek"></label></div></td></tr>' );
  }

	
}

$(document).on("click", "label", function() {
//socket.emit('to_all', 'clicked');

var my_value = '';
var contrl_itm = $(this).attr("for");
var status = document.getElementById(contrl_itm).checked;
if(status){my_value=0;}else {
my_value=1;
}


//change_settings(contrl_itm, my_value);


//Window[contrl_itm]=my_value;
localStorage[contrl_itm]=my_value;
socket.emit("to_main", "reload");
//change_settings_al(contrl_itm, my_value);


});



function change_settings(contrl_itm, my_value){
window[contrl_itm]=my_value;
//alert(contrl_itm +' : '+ my_value);
//alert(window[contrl_itm]);




//var fs = require('fs');

fs.readFile(my_ui_cfg_file, 'utf-8', function (error, contents) {	

var my_cfg_before=contents.substring(0, contents.indexOf(contrl_itm)+contrl_itm.length+1);
//var my_cfg_before=contents.split(contrl_itm)[1];
var my_cfg_after=contents.substring(contents.indexOf(contrl_itm)+contrl_itm.length+2);


fs.writeFile(my_ui_cfg_file, my_cfg_before+my_value+my_cfg_after);

});
}

function change_settings_al(contrl_itm, my_value){
window[contrl_itm]=my_value;

fs.readFile(my_al_cfg_file, 'utf-8', function (error, contents) {	

var my_cfg_before=contents.substring(0, contents.indexOf(contrl_itm)+contrl_itm.length+1);
var cont_wo_before=contents.substring(my_cfg_before.length);
var my_cfg_after=cont_wo_before.substring(cont_wo_before.indexOf(';'))

//alert(my_cfg_before+my_value+my_cfg_after);

fs.writeFile(my_al_cfg_file, my_cfg_before+my_value+my_cfg_after);

});
}


function display(id){
var e = document.getElementById(id);
e.style.display = 'block';
}

function dontdisplay(id){
var e = document.getElementById(id);
e.style.display = 'none';
}


function save_bg_color(){
localStorage.bgr = new_bgr;
localStorage.bgg = new_bgg;
localStorage.bgb = new_bgb;
localStorage.bga = new_bga;

//document.getElementById('icons').style.backgroundColor = 'rgba(' + new_bgr + ',' + new_bgg + ',' + new_bgb + ',' + new_bga + ')';
document.getElementById("save_bg_color").style.display = "none";

setTimeout(function(){ socket.emit('to_main', 'reload'); }, 500);

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


$('#save_order').css("display","block");
}

}

}

function save_order_call_home(){

socket.emit('to_main', 'save_order_call_home');
setTimeout(function(){ $( "#save_order" ).hide(); }, 1000);
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

function  color_update(){
document.getElementById("save_bg_color").style.display = "inline-block";
new_bgr = document.getElementById('bgr').value;
//new_bgr = parseInt(new_bgr);
new_bgg = document.getElementById('bgg').value;
//new_bgg = parseInt(new_bgg);
new_bgb = document.getElementById('bgb').value;
//new_bgb = parseInt(new_bgb);
new_bga = document.getElementById('bga').value;


}


function select_theme(){
var e = document.getElementById("theme_select");
var theme_indx = e.options[e.selectedIndex].value;
localStorage.theme_mode = theme_indx;
//change_settings_al('theme_mode', theme_indx);
//setTimeout(function(){ win.reload(); }, 1000);
socket.emit('to_main', 'reload');
}

function run_command(command, type ){
gui.Shell.openExternal(command);
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
}else if (my_app_indx==7){
document.getElementById("type_of_selection").innerHTML = '<input id="my_input_app" placeholder="Ctrl+V"  type="text" onchange="check_Form();" />  <input type="hidden" id="my_app_type" value="5">';
}
	
}

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
$('#add_icon_cell').css("display","table-row");
}

}


function add_icon(){
	
var x = document.getElementById('my_input_name').value
var y = document.getElementById('my_input_icon').value
var t = document.getElementById('my_app_type').value;


var y_cmd =y;

var my_icons_folder_cmd=my_al_icons_folder;
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
my_al_icons.push(new_icon);
var json_text = JSON.stringify(my_al_icons, null, 2);

fs.writeFile(my_al_json_file, json_text, function(err) {
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
//josend

//resize_window();
socket.emit('to_main', 'reload');
setTimeout(function(){ reload_icons(); }, 200);
setTimeout(function(){ win.reload(); }, 400);
}



function delete_icon(){
var e = document.getElementById("delete_icon_selection");
var delete_icon_indx = e.options[e.selectedIndex].value;


my_al_icons.splice(delete_icon_indx, 1);

var json_text = JSON.stringify(my_al_icons, null, 2);
var fs = require('fs');
fs.writeFile(my_al_json_file, json_text, function(err) {
    if(err) {
        alert("error");
    }
});



//josend

//resize_window();
socket.emit('to_main', 'reload');
win.reload();
}

