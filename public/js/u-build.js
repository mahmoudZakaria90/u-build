//Custom .js


//Copy
if(document.querySelector('footer button')){
let copyBtn = document.getElementById('u-copy-btn');
	copyBtn.onclick = function(){
		if(document.getElementsByTagName('textarea')[0].value){
	 	let x = document.getElementById('u-copy-area')
	 	let y = document.getElementById('u-copy-state')
	 	x.removeAttribute('disabled')
	 	setTimeout(function(){
	 		x.setAttribute('disabled','disabled')
	 		y.className += ' active'
	 	},1000)
	 	setTimeout(function(){
	 		x.setAttribute('disabled','disabled')
	 		y.classList.remove('active') 
	 	},5000)
	 	x.select()
	 	document.execCommand('copy')
	 }
	}
}

let u = {
	containerOuter : document.querySelector('.u-build .container'),
	containerInner: document.querySelectorAll('.u-build *'),
	init: function() {
		for (let i = 0; i < this.containerInner.length; i++) {
			this.containerInner[i].title = "Size: " + this.containerInner[i].offsetWidth + 'px'
		}
	//calling reset of methods
	this.container()
	this.target()
	this.buildingForm.init()
	},
	container: function() {
		let containerInput = document.getElementById('u-container-input');
		containerInput.oninput = function() {
			let parsed = parseInt(containerInput.value)
			if(parsed < 320 || parsed > 1920){
				return false
			}
			this.containerOuter.style.maxWidth = parsed + 'px';
		}.bind(u)
	},
	target: function() {
		let allElements = []
		for (let i = 0; i < this.containerInner.length; i++) {
			allElements.push(this.containerInner[i])
		}
		allElements.forEach(function(n,ind,arr){
			n.addEventListener('click', function(e){
			e.stopPropagation()
			let eventObj = {
				targetEl: e.target,
				targetType: e.type,
				targetName: e.target.tagName.toLowerCase(),
				targetClass: e.target.className,
				targetId: e.target.id
			}
			
			for (let i = 0; i < document.querySelectorAll('.u-build *').length; i++) {
				document.querySelectorAll('.u-build *')[i].style.borderColor = '#999'
			}
			eventObj.targetEl.style.borderColor = 'yellow'
			this.buildingForm.targetTitle.innerHTML = eventObj.targetClass
			this.buildingForm.form.className += ' active'
			this.buildingForm.submitBtn.onclick = function(e){
				e.preventDefault();
				
				if(this.rowCheckbox.checked){		
					var newRow = document.createElement('div')
					newRow.className = 'row clf'
					eventObj.targetEl.appendChild(newRow)
				}

				if(this.flexCheckbox.checked){
					eventObj.targetEl.setAttribute('data-flex','flex')
				}
				for (let i = 0; i < this.quantity.value; i++) {
					var newElement = document.createElement(this.tagName.value)
					newElement.className = 'span-' + Math.floor((12 / this.quantity.value))
					if(this.rowCheckbox.checked){
						newRow.appendChild(newElement)
					}else{
						eventObj.targetEl.appendChild(newElement)
					}
				}
				for (let i = 0; i < document.querySelectorAll('.u-build *').length; i++) {
					document.querySelectorAll('.u-build *')[i].title = "Size: " + document.querySelectorAll('.u-build *')[i].offsetWidth + 'px'
				}		
				for (var i = 0; i < document.querySelectorAll('.u-build *').length; i++) {
					document.querySelectorAll('.u-build *')[i].removeAttribute('style')
				}
				var copyArea = document.getElementById('u-copy-area')
				copyArea.value = document.querySelector('.u-build').innerHTML
				

			}.bind(u.buildingForm)

		  }.bind(u), false)
		})
	},
	buildingForm: {
		form: document.forms[0],
		targetTitle: document.getElementById('u-target'),
		init: function(){
			this.enable()
			this.checkboxes()
		},
		enable: function(){
			let wrap = []
			let el = document.getElementsByClassName('u-item-text-input')
			for (let i = 0; i < el.length; i++) {
				wrap.push(el[i])
			}
			wrap.forEach(function(n,ind,arr){
				n.oninput = function(){
					if(arr[0].value && arr[1].value){
						this.submitBtn.removeAttribute('disabled')
					}else{
						this.submitBtn.setAttribute('disabled','disabled')
					}
				}.bind(u.buildingForm)
			})
			
		},
		checkboxes: function(){
			let wrap = []
			let el = document.querySelectorAll('.u-item-inputs-flex input')
			for (let i = 0; i < el.length; i++) {
				wrap.push(el[i])
			}
			wrap.forEach(function(n,ind,arr){
				
				n.onchange = function(){
				
				if(arr[0].checked){
					arr[1].setAttribute('disabled','disabled')
					arr[1].parentNode.classList.add('disabled')
				}else{
					arr[1].removeAttribute('disabled')
					arr[1].parentNode.classList.remove('disabled')
				}

				if(arr[1].checked){
						arr[0].setAttribute('disabled','disabled')
						arr[0].parentNode.classList.add('disabled')
					}else{
						arr[0].removeAttribute('disabled')
						arr[0].parentNode.classList.remove('disabled')
					}
				}
			})
		},
		flexCheckbox: document.getElementById('u-flexCheckbox'),
		rowCheckbox: document.getElementById('u-rowCheckbox'),
		tagName: document.getElementById('u-item-tagName'),
		quantity: document.getElementById('u-item-quan'),
		labelsWrap: document.getElementById('u-item-labels-wrap'),
		submitBtn: document.getElementById('u-item-btn')
	}
}
	
	

window.addEventListener('load',() => {
	u.init()
})