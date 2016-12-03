//Custom .js


//Copy
if(document.querySelector('footer button')){
let copyBtn = document.querySelector('footer button');
	copyBtn.onclick = function(){
	 	let x = document.getElementsByTagName('textarea')[0]
	 	x.select()
	 	document.execCommand('copy')
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
		var allElements = []
		for (var i = 0; i < this.containerInner.length; i++) {
			allElements.push(this.containerInner[i])
		}
		allElements.forEach(function(n){
			n.addEventListener('click', function(e){
			e.stopPropagation()
			var eventObj = {
				targetEl: e.target,
				targetType: e.type,
				targetName: e.target.tagName.toLowerCase(),
				targetClass: e.target.className,
				targetId: e.target.id
			}
			
			u.buildingForm.targetELd.innerHTML = eventObj.targetClass
			}, false)
		})
	},

	buildingForm: {
		targetELd: document.getElementById('u-target'),
		init: function(){
			this.targetELd.innerHTML = u.containerOuter.className
		}
	}
}
	
	

window.addEventListener('load',() => {
	u.init()
})