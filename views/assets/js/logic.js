
const createRequest= function () {
	const requestItem = document.getElementsByClassName('requestItem');
			Array.from(requestItem).forEach(function(element){
				element.addEventListener('click', function(e){
							console.log(e)
						let inputField = document.createElement('OL')
						inputField.innerHTML =  "<input type='text' name='Requests' placeholder='enter song name'></input>"
	                    document.getElementById('request').appendChild(inputField)
				})
			})
}();

const doNotPlay = function () {
	const createDnp = document.getElementsByClassName('createDnp');
			Array.from(createDnp).forEach(function(e){
				e.addEventListener('click', function(e){
							console.log(e)
						let dnpField = document.createElement('OL')
						dnpField.innerHTML =  "<input type='text' name='doNotPlay' placeholder='enter song name'></input>"
	                    document.getElementById('doNotPlay').appendChild(dnpField)
				})
			})
}();

const addGroomsmen = function() {
	const createGroomsmen = document.getElementsByClassName('createGroomsmen');
			Array.from(createGroomsmen).forEach(function(element){
				element.addEventListener('click', function(e){
					let groomsmenField = document.createElement('OL')
					groomsmenField.innerHTML = "<input type='text' name='groomsmen' placeholder='groomsmen' onfocus='this.placeholder ='' onblur= this.placeholder ='groomsmen'></input>"
					document.getElementById('groomsmen').appendChild(groomsmenField)
				})
			})
}();

const addBridesmaids = function() {
	const createBridesmaids = document.getElementsByClassName('createBridesmaids');
			Array.from(createBridesmaids).forEach(function(element){
				element.addEventListener('click', function(e){
					let bridesmaidsField = document.createElement('OL')
					bridesmaidsField.innerHTML = "<input type='text' name='bridesmaids' placeholder='bridesmaids' onfocus='this.placeholder ='' onblur= this.placeholder ='bridesmaids'></input>"
					document.getElementById('bridesmaids').appendChild(bridesmaidsField)
				})
			})
}();



