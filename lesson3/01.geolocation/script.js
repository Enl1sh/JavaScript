if (navigator.geolocation) {
	const onSuccess = (position) => {
		console.log('position', position);
		const body = document.querySelector('body');
		const link = document.createElement('a');
		link.setAttribute('href', `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
		link.innerText = 'Click here to see your postion';
		body.appendChild(link);

	}
	
	const onError = (error) => {
		console.log('error', error);
		
	}
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

