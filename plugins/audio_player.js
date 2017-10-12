$(document).ready(function(){

var element = document.createElement("div");
element.className = "ui-draggable";
element.setAttribute("id", "audio_payer");
element.appendChild(document.createTextNode(" "));
document.body.appendChild(element);

//$('#audio_payer').draggable();

var div = document.createElement('span');
div.setAttribute("id", "player_container");
div.innerHTML = '<audio controls id="audioPlayer"><source id="oggSource" src="" type="audio/ogg"></source><source id="mp3Source" type="audio/mp3"></source>Your browser does not support the audio element.</audio>';
document.getElementById('audio_payer').appendChild(div);
//add playlist
var div2 = document.createElement('span');
div2.setAttribute("id", "playlist");
div2.innerHTML = '<ul id="playlist_ul"><li data-music_loc="g:/Downloads/Deep House Mix _19 2015 _ Best New Deep _ House Music Mix.mp3" class="playlist_itm">test</li><li class="playlist_itm">testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li><li class="playlist_itm">test</li></ul>';
document.getElementById('audio_payer').appendChild(div2);



$(".playlist_itm").click(function(){
var itm_loc=this.dataset.music_loc;
//alert(itm_loc);

        var audio = document.getElementById('audioPlayer');

        var source = document.getElementById('mp3Source');
        source.src=itm_loc;

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
});




});