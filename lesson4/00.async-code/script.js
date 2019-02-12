'use strict';

setTimeout(() => {
	console.log('hello');
}, 3000);


window.addEventListener('click', () => {
	setTimeout(() =>{
		console.log('clicked');
	}, 4000);
});

	
	
//Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
	
const img = document.createElement('img');
img.src = 'http://lorempixel.com/400/200/';
//Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.

img.onload = () => {
	console.log('loaded');
	document.querySelector('body').appendChild(img);
}
//En cas d'erreur de chargement, logguez dans la console 'Error'.

img.onerror = () => {
	console.log('Error has occured');
};

//Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.
const myScript = document.createElement('script')
myScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js'
myScript.onLoad = () => {
	console.log(_.ceil(4.005));
}

document.querySelector('body').appendChild(myScript);



//Quand le script sera téléchargé, appelez une de ces fonctions.