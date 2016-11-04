//Custom .js


//Copy
if(document.querySelector('footer button')){
var copyBtn = document.querySelector('footer button');
	copyBtn.onclick = function(){
	 	var x = document.getElementsByTagName('textarea')[0]
	 	x.select()
	 	document.execCommand('copy')
	}
}

