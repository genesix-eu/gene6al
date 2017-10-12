var menu = new gui.Menu();


if (colombo==1){
menu.append(new gui.MenuItem({
label: 'Colombo',
click: function() {

var win = gui.Window.open('plugins/colombo.html', {
  position: 'center',
  width: 792,
  height: 552,
  frame:false,

  transparent:false,
  resizable:true,
  focus:true
});


}
}));
}




if (all_widgets==1){
menu.append(new gui.MenuItem({
label: 'All Widgets',
click: function() {

open_all_widgets();

}
}));
}

if (cmd==1){
menu.append(new gui.MenuItem({
label: 'CMD',
click: function() {
var win = gui.Window.open('plugins/cmd.html', {
  position: 'center',
  width: 792,
  height: 552,
  frame:false,
  toolbar:false,
  transparent:true,
  resizable:false,
  focus:true
});


}
}));
}


if (e3dlogo==1){
menu.append(new gui.MenuItem({
label: '3DLogo',
click: function() {
var win = gui.Window.open('3dlogo.html', {
  position: 'center',
  width: 792,
  height: 552,
  frame:false,
  toolbar:false,
  transparent:true,
  resizable:false
});


}
}));
}




if (motivation==1){
menu.append(new gui.MenuItem({
label: 'Motivation',
click: function() {
var win = gui.Window.open('motivation/1.html', {
  position: 'center',
  width: 410,
  height: 210,
  frame:false,
  toolbar:false, 
  transparent:true,
  resizable:false
});
}
}));
}


if (dev_mode==1){
menu.append(new gui.MenuItem({
label: 'Dev Tools',
click: function() {
//alert(win.isDevToolsOpen());
//temp 1 Not working
// if (win.isDevToolsOpen()) {
// win.closeDevTools();
// }else if (dev_mode==1){win.showDevTools();
// }
win.showDevTools();


}
}));
}


if (dev_mode==1){
menu.append(new gui.MenuItem({
label: 'Reload',
click: function() {

win.reload();
}
}));
}


if (colombo==1 || dev_mode==1){
menu.append(new gui.MenuItem({ type: 'separator' }));
}

menu.append(new gui.MenuItem({
label: 'Settings',
click: function() {
var win = gui.Window.open('plugins/control_panel.html', {
  position: 'center',
  width: 792,
  height: 552,
  frame:false,
  
  transparent:false,
  resizable:false
});

}
}));




menu.append(new gui.MenuItem({
label: 'Quit',
click: function() {
close();
}
}));







document.body.addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  // Popup at place you click
  menu.popup(ev.x, ev.y);
  return false;
}, false);



//////////////////////////////////////////////////////////////////////////////////////
// Create a tray icon
var tray = new gui.Tray({ title: 'Tray', icon: 'img/app-draw.png' });

// Give it a menu
var menu_tray = new gui.Menu();
//menu_tray.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
// menu_tray.append(new gui.MenuItem({
// label: 'Toggle FullScreen',
// click: function() {
// win.toggleFullscreen();
// }
// }));


menu_tray.append(new gui.MenuItem({
label: 'Show',
click: function() {
win.show();
}
}));



menu_tray.append(new gui.MenuItem({
label: 'Dev Option',
click: function() {
//alert(win.isDevToolsOpen());
//temp1 Not Working 
// if (win.isDevToolsOpen()) {
// win.closeDevTools();
// }else if (dev_mode==1){}
win.showDevTools();


}
}));

menu_tray.append(new gui.MenuItem({
label: 'Quit',
click: function() {
close();
}
}));




tray.menu = menu_tray;
