'use strict';
	
const API_KEY = 'LHxPK6uY2A9aYawAzOk4VfdSpheFrUq1';
  fetch('https://api.giphy.com/v1/gifs/random?api_key=
  method: 'GET',
  })

  .then(response => response.json())
  .then(result => {
    const img = document.createElement('img');
  img.src = result.data.fixed_height_downsampled_url;
    document.querySelector('body').appendChild(img);
    console.log(result);
  });