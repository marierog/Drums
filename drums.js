// listen to keys
window.addEventListener('keydown', function(e){
	var keycode = e.keyCode;
	var audioToSelect = "audio[data-olala=\'"+ keycode + "\'";
	var sound = document.querySelector(audioToSelect);
	console.log(sound);
	if(!sound) return;
	sound.currentTime= 0; //rewind ro the start
	sound.play();

	var keyToSelect = ".key[data-olala=\'"+ keycode + "\'";
	var key = document.querySelector(keyToSelect);
	key.classList.add("key-pressed");
});

function removeTransition(e){
	//aq yvela event iqneba romelic morcha
	//bevr rame mtavrdeba ai feris cvlileba da atasi rame
	//yvelaze grdzeli transform aris da magas davelodot marto
	if(e.propertyName !== 'transform') return;
	//var key = document.querySelector("key-pressed");
	//es igivea rac this imitoro amaze gamoidzaxes funqcia
	this.classList.remove('key-pressed');
}

// listen to the end of transitions
//rom daelodo snam daasrulebs gayvitlebas da gazrdas
//da mere daabruno sawyisshi
var keys = document.querySelectorAll(".key");
keys.forEach(function(key){
	key.addEventListener('transitionend', removeTransition);
});