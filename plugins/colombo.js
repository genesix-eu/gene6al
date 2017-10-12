var fs = require('fs');
var os = require('os');
var force_portable=0;

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
  var my_home_folder=temp_dir+"/default";
  var my_cfg_folder=my_home_folder+'/Gene6/Launcher';
  var my_icons_folder=my_home_folder+'/Gene6/Launcher/icons/';
  var my_css_folder=my_home_folder+'/Gene6/Launcher/css/';
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

if (fs.existsSync(my_cfg_file)) {
$("head").append('<script type="text/javascript" src="' +'file:///'+ my_cfg_file + '"></script>');
}






// Get the current window
var where = "";


function check_partt(){
var spawn = require('child_process').spawn,
list  = spawn('cmd');
list.stdin.write('wmic logicaldisk get name > drive.txt\n');
list.stdin.write('wmic logicaldisk get drivetype > drivet.txt\n');
list.stdin.end();	
}




function drivet()
{



$.get("../drivet.txt", function(data) {
window.drivetype = data.split('\n');
window.drivetype.splice('0', '1');
window.drivetype.pop();

});
}




$( document ).ready(function() {
socket = io.connect('http://localhost:7331');
setTimeout(function(){ myComputer(); }, 1337);


$(document).on("dblclick", ".folder", function() {
if ($(this).text() ==='..' && where.length<=3){myComputer(); where="";}
else if($(this).text() ==='..' && where.length>3){
	where=where.replace(/\\/g,"/");
	where = where.substr(0, where.lastIndexOf("/"));
	where = where.substr(0, where.lastIndexOf("/"));
	//where = where.substr(0, where.lastIndexOf("/"));
	// = where.substr(0, where.lastIndexOf("/"));
	newFiles('foldertree');
	console.log(where);
	explore(where, "up"); 
	}
	else{

//var exploreWhat = $(this).text());
//explore(where +();

newFiles('foldertree');
where=where + $(this).text(); 
//alert(where);
var path = require('path');
path.normalize(where);
//alert(where);
console.log(where);
explore(where); 
	  
}
});


$(document).on("dblclick", ".file", function() {

//var exploreWhat = $(this).text());
//explore(where +();

//alert(where+$(this).text());
run_command(where+$(this).text() , "1");

//alert(where);
var path = require('path');
path.normalize(where);
//alert(where);
//console.log(where);
//explore(where); 
	  

});

//END OF DOCUMENT READY
});


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
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});



}
}



function myComputer()
{
drivet();
$.get("../drive.txt", function(data) {
window.driveletters = data.split('\n');
window.driveletters.splice('0', '1');
window.driveletters.pop();


newFiles('foldertree');
for (var i=0;i<driveletters.length;i++)
{
//alert(driveletters[i]);


//$('<span class="drive">'+driveletters[i]+'</span>').insertAfter('.folder');
$('div#foldertree').append('<span class="drive drivetype'+drivetype[i]+'">'+driveletters[i]+'</span>');

}

$('#foldertree').find('span').first().remove();

  });
  

$( "#adressbar" ).html('<button type="button" class="tbutton" onclick="myComputer();">Home</button>');
}

function insertAfter(newElement,targetElement) { 
  var parent = targetElement.parentNode; 
  if (parent.lastChild == targetElement) { 
    parent.appendChild(newElement); 
  } else { 
    parent.insertBefore(newElement,targetElement.nextSibling); 
  } 
}


function newFiles(elementID)
{
    document.getElementById(elementID).innerHTML = "<span class='folder' style=''>..</span>";
	
}

$(document).on("dblclick", ".drive", function() {
where=$(this).text();
newFiles('foldertree');
where = where.replace(/(\r\n|\n|\r)/gm,"");
where = where.replace(/\s/g, '');
var lastChar = where.substr(where.length - 1); // => "1"
if (lastChar!="/"){
window.where = where +'/';
}
explore(where);

});

function explore(wwhere, up_drirection){


//console.log ('first in:'+where);
myPath = wwhere;
myPath = myPath.replace(/\//g, "/,");
myPath = myPath.replace(/\\/g, "/,");
if (myPath.length >3){
myPath = myPath.split(",");
}else{
myPath = [myPath];
}

//$( "#adressbar" ).html('');
$( "#adressbar" ).html('<button type="button" class="tbutton" onclick="myComputer();">Home</button>');
myPath.forEach(function(entry) {
$( "#adressbar" ).append( '<button type="button" class="tbutton" onclick="adressGo('+"'"+entry+"'"+')" >'+entry+'</button>' );

});





//alert (path);
var fs = require('fs');
var path = require('path');
//console.log('test:'+where);
path.normalize(wwhere);
var lastChar = wwhere.substr(wwhere.length - 1); // => "1"
if (lastChar!="/"){
window.where = wwhere +'/';
}

//console.log('readdir:'+window.where);
//where = path.normalize(where);
//alert(where);



fs.readdir(wwhere, function (err, files) { // '/' denotes the root folder
  if (err) throw err;

  

   files.forEach( function (file) {

if (undefined != file){
     fs.lstat(wwhere+'/'+file, function(err, stats) {
try {
		if (stats.isCharacterDevice()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+wwhere+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
		else if (stats.isDirectory()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+wwhere+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
       else{
	   var ext = file.split('.').pop();
		$('div#foldertree').append('<span class="file '+ ext +'" title="'+file+'">'+file+'</span>');
		if (ext=='mp3'){
			//temp_playlist.push();
			media_check(ext);}
	  }
  } catch (e) {
   // window.alert(e);
  }




	  });
	 }
else{
     fs.lstat(wwhere+'/', function(err, stats) {
	 
		if (stats.isDirectory()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+wwhere+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
       else{
		$('div#foldertree').append('<span class="file">'+file+'</span>');
      
	  }
     });
}
});
});




}

function explorelink(where){
	focus('explorer');
//alert (where);
myPath = where;
myPath = myPath.replace(/\//g, "/,");
myPath = myPath.replace(/\\/g, "/,");

if (myPath.length >3){
myPath = myPath.split(",");
}else{
myPath = [myPath];
}
console.log(myPath);

//$( "#adressbar" ).html('');
$( "#adressbar" ).html('<button type="button" class="tbutton" onclick="myComputer();">Home</button>');
var pathLoc=[];

var z=0;
myPath.forEach(function(entry) {
if (entry){

z++;
pathLoc.push(entry);
//var myNum = Object.size(pathLoc);
var myNum = pathLoc.length;
var myentry='';

switch (z) {
    case 1:
		myentry='';
        break; 
    case 2:
		var prev_locs = pathLoc[pathLoc.length - 2];
		myentry=prev_locs;
        break;
    case 3:
		var prev_locs = pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 2];
		myentry=prev_locs;
        break;
    case 4:
		var prev_locs = pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 2];
		myentry=prev_locs;
        break;
    case 5:
		var prev_locs = pathLoc[pathLoc.length - 5]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 2];
		myentry=prev_locs;
        break;
		//work on beatch
    case 6:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 7:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 8:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 9:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 10:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 11:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
    case 12:
		var prev_locs = pathLoc[pathLoc.length - 2]+pathLoc[pathLoc.length - 3]+pathLoc[pathLoc.length - 4]+pathLoc[pathLoc.length - 5];
		myentry=prev_locs;
        break;
}



$( "#adressbar" ).append( '<button type="button" class="tbutton" onclick="adressGo('+"'"+myentry+entry+"/'"+')" >'+entry+'</button>' );
}
});



//alert (path);
var fs = require('fs');
var path = require('path');
path.normalize(where);
var lastChar = where.substr(where.length - 1); // => "1"
if (lastChar!="/"){
window.where = where +'/';
}else{
window.where = where;
}


//where = path.normalize(where);




fs.readdir(where, function (err, files) { // '/' denotes the root folder
  if (err) throw err;

  

   files.forEach( function (file) {

if (undefined != file){
     fs.lstat(where+'/'+file, function(err, stats) {
try {
		if (stats.isCharacterDevice()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+where+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
		else if (stats.isDirectory()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+where+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
       else{
	   var ext = file.split('.').pop();
		$('div#foldertree').append('<span class="file '+ ext +'" title="'+file+'">'+file+'</span>');
		//if (ext=='mp3'){media_check(ext);}
	  }
  } catch (e) {
   // window.alert(e);
  }




	  });
	 }
else{
     fs.lstat(where+'/', function(err, stats) {
	 
		if (stats.isDirectory()) { //conditing for identifying folders
		 $('<span class="folder" blabla="newFiles("foldertree");explore('+where+''+file+')" >'+file+'</span>').insertAfter('.folder:last');
       }
       else{
		$('div#foldertree').append('<span class="file">'+file+'</span>');
      
	  }
     });
}
});
});


}

function getUserDoc(what) {
switch(what) {
    case 1:
        return process.env.USERPROFILE+'\\Desktop';
        break;
    case 2:
        return process.env.USERPROFILE+'\\Documents';
        break;
    case 3:
        return process.env.USERPROFILE+'\\Downloads';
        break;
    default:
        return process.env.USERPROFILE;
}





  return process.env.USERPROFILE+'\\Documents';
}