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

var u = {
	label_checkbox: function(){
		this.label= document.getElementsByClassName('u-item-title');
		this.checkbox = document.getElementsByClassName('u-item-checkbox')
			for (var i = 0; i < this.label.length; i++) {
				this.label[i].setAttribute('for','checkbox'+i)
				this.checkbox[i].id = 'checkbox' + i
		}
	},
	container: function(){
		var container = document.getElementById('u-container');
		var containerInput = document.getElementById('u-container-input');
		// var feedback = document.getElementById('u-container-input-feedback');
		containerInput.placeholder = 'Container by default = ' + container.offsetWidth + 'px'
		containerInput.setAttribute('min',container.offsetWidth)
		// feedback.innerHTML = container.offsetWidth
		containerInput.oninput = function(){
			container.style.maxWidth = containerInput.value + 'px';
			// feedback.innerHTML = container.offsetWidth
			
		}
	},
	forms: function(){
		var afterLoop = [];
		var docForms = document.forms;

		for (var i = 0; i < docForms.length; i++) {
			afterLoop.push(docForms[i])
		}
		return afterLoop
	},
	formLiterly: function(){
		var formStructure = '<div class="u-item-wrap"><input type="checkbox" hidden="" class="u-item-checkbox"><label for="" class="u-item-title">Container <span class="fa fa-caret-right"></span></label><form action="" class="u-item-inputs"> <label for="" class="u-item-inputs-flex" disabled="">Flex <input type="checkbox" disabled=""></label> <label for="" class="u-item-inputs-flex u-item-inputs-row">Row <input type="checkbox"></label> <label for=""><input type="text" placeholder="Width"></label><label for=""><input type="text" placeholder="Tag name"></label><label for=""><input type="text" placeholder="Cols quantity"></label> <label for=""><input type="text" placeholder="Col width"></label><label for="" class="u-item-inputs-btn"><input type="button" value="Submit"></label></form></div>'
		this.label_checkbox()
		return formStructure
	}
}
	
	

window.addEventListener('load',function(){
	u.label_checkbox()
	u.container()
})