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
	containerInner: document.querySelectorAll('.u-build .container *'),
	init: function() {
		
		for (let i = 0; i < this.containerInner.length; i++) {
			this.containerInner[i].title = Math.floor(this.containerInner[i].offsetWidth) + 'px'
		}
	},
	container: function() {
		let containerInput = document.getElementById('u-container-input');
		containerInput.oninput = function() {
			let parsed = parseInt(containerInput.value)
			if(parsed < 320 || parsed > 1920){
				return false
			}
			this.containerOuter.style.maxWidth = parsed + 'px';
		}
		
		this.containerOuter.title = this.containerOuter.offsetWidth + 'px'
		this.containerOuter.addEventListener('click',function(e){
			this.eventObj = {
				targetEl: e.target,
				targetType: e.type,
				targetName: e.target.tagName.toLowerCase(),
				targetClass: e.target.className,
				targetId: e.target.id
			}
		
		},true)
	},
	target: function() {
		var allElements = []
		for (var i = 0; i < this.containerInner.length; i++) {
			allElements.push(this.containerInner[i])
		}
		allElements.forEach(function(n){
			n.addEventListener('click', function(e){
			this.eventObj = {
				targetEl: e.target,
				targetType: e.type,
				targetName: e.target.tagName.toLowerCase(),
				targetClass: e.target.className,
				targetId: e.target.id
			}
			document.getElementsByClassName('span-4')[2].innerHTML = this.eventObj.targetClass
		
			}, false)
		})
	}

	
}
	
	

window.addEventListener('load',() => {
	u.container()
	u.init()
	u.target()
	
})