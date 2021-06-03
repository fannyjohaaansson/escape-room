AFRAME.registerComponent('open-final', {
	init: function () {
		let el = this.el
		let finalPopup = document.getElementById('finalClue')
		this.finalInfo = function () {
			finalPopup.classList.remove('hide')
		}
		this.el.addEventListener('click', this.finalInfo)
	},
	remove: function () {
		this.el.removeEventListener('click', this.finalInfo)
	},
})
function closeFinalPopup() {
	let finalPopup = document.getElementById('finalClue')
	finalPopup.classList.add('hide')
}
