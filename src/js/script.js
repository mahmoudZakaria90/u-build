//Custom .js

var gv = require("./give.js");


//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
	gv.sliderInit();
	gv.dropdown('click');
})

//Copy
if(document.querySelector('footer button')){
var copyBtn = document.querySelector('footer button');
	copyBtn.onclick = function(){
	 	var x = document.getElementsByTagName('textarea')[0]
	 	x.select()
	 	document.execCommand('copy')
	}
}

