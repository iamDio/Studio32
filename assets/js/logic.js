
function createRequest() {
	const requestItem = document.getElementsByClassName('requestItem');
			Array.from(requestItem).forEach(function(element){
				element.addEventListener('click', function(e){
							console.log(e)
						let inputField = document.createElement('OL')
						inputField.innerHTML =  "<input type='text' name='Requests' placeholder='enter song name'></input>"
	                    document.getElementById('request').appendChild(inputField)
				})
			})
}
createRequest();

function createDnp() {
	const createDnp = document.getElementsByClassName('createDnp');
			Array.from(createDnp).forEach(function(e){
				e.addEventListener('click', function(e){
							console.log(e)
						let dnpField = document.createElement('OL')
						dnpField.innerHTML =  "<input type='text' name='doNotPlay' placeholder='enter song name'></input>"
	                    document.getElementById('doNotPlay').appendChild(dnpField)
				})
			})
}
createDnp();
