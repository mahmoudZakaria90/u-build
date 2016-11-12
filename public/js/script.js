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

var ub = {
	u_label: document.getElementsByClassName('u-item-title'),
	u_checkbox: document.getElementsByClassName('u-item-checkbox'),
	u_label_checkbox: function(){
			for (var i = 0; i < this.u_label.length; i++) {
				this.u_label[i].setAttribute('for','u_checkbox'+i)
				this.u_checkbox[i].id = 'u_checkbox' + i
		}
	},

	
	u_forms: document.forms,
	u_formsArray: [],
	u_removeBtn: function(){
		var newBtn = document.createElement('button')
		newBtn.className = "u-remove fa fa-times"
		return newBtn
	},

	u_formsEach: function(){
		for(var i = 0; i < this.u_forms.length; i++){
			this.u_formsArray.push(this.u_forms[i])
		}
		this.u_formsArray.forEach(function(el){
			var formsFlex = el.children[0].children[0];
			var formsRow = el.children[1].children[0];
			var formsWidth = el.children[2].children[0];
			var formsTagName = el.children[3].children[0];
			var formsQuan = el.children[4].children[0];
			var formsColWidth = el.children[5].children[0];
			var formsColSubmit = el.children[6].children[0];

			formsColSubmit.addEventListener('mousedown',function(){
				var parent = el.parentNode.parentNode;
				var parentInner = el.parentNode;

				if(formsFlex.checked){
					parent.style.display = 'flex';
				}else{
					parent.style.display = 'block'
				}

				if(formsRow.checked){
					var newRow = document.createElement('div');
					newRow.className = 'row'
					parent.appendChild(newRow)
					newRow.appendChild(ub.u_removeBtn())
					
				}
			})
		})
	}

}

window.addEventListener('load',function(){
	ub.u_label_checkbox()
	ub.u_formsEach()
}) 