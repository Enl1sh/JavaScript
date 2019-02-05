'use strict';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const getCursorPosition = (canvas, event) => {
	const rect = canvas.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.left;
	console.log("x: " + x + " y: " + y);
}

canvas.addEventListener('click', (event) => {
	getCursorPosition(canvas, event);
})

ctx.fillstyle = 'red';
ctx.strokeStyle = 'red';

//body
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(338,250, 150, Math.PI, 2 * Math.PI,  true); 
ctx.stroke();
ctx.fill();

//head
ctx.arc(346, 244, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//text
ctx.strokeStyle = 'white';
ctx.font = "60px Arial";
ctx.strokeText("Je comprends rien :)", 70, 244);

