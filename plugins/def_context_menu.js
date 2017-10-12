var gui = require('nw.gui');
var win = gui.Window.get();
var menu = new gui.Menu();

if (dev_mode==1){
menu.append(new gui.MenuItem({
label: 'Dev Tools',
click: function() {

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

if (dev_mode==1){
menu.append(new gui.MenuItem({ type: 'separator' }));
}

menu.append(new gui.MenuItem({
label: 'Quit',
click: function() {
close();
}
}));



document.body.addEventListener('contextmenu', function(ev) { 
ev.preventDefault();
menu.popup(ev.x, ev.y);
return false;
}, false);

