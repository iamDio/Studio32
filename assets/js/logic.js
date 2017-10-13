

function createRequest(){
	let classname = document.getElementsByClassName('requestItem');
		Array.from(classname).forEach(function(element){
			document.body.addEventListener('keypress', function(e){
				let key = e.which || e.keyCode;
				if (key === 13) {
					let inputField = document.createElement('OL')
					inputField.innerHTML = "<input class='requestItem' type='text' name='Requests' placeholder='enter song name'></input>"
					
					document.getElementById('request').appendChild(inputField)
				}

			})
		})
}

createRequest();