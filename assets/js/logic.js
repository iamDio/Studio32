document.getElementById('requestItem').addEventListener('keypress', function(e){
	var key = e.which || e.keyCode;
	if (key === 13) {
		let inputField = document.createElement('OL', 'INPUT')
		document.getElementById('request').appendChild(inputField)
	}
})
