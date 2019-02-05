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

ctx.fillstyle = 'black';
ctx.strokeStyle = 'black';

//Head
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//body
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 4 * Math.PI);
ctx.stroke();
ctx.fill();

//scarf
ctx.fillStyle = 'yellow'
ctx.fillRect(165, 230, 70, 20);
ctx.fillRect(211, 232, 20, 90);

//right arm
/*ctx.strokeStyle = 'white'*/
ctx.moveTo(139,296)
ctx.lineTo(38,248)
ctx.stroke()

//left arm
ctx.beginPath()
ctx.moveTo(260,300)
ctx.lineTo(350,236)
ctx.stroke()

//hat
ctx.fillRect (126,130,150,30)
ctx.fillRect (148,33,110,120)

//eye
ctx.strokeStyle = 'white'
ctx.beginpath();
ctx.arc(214, 172, 5,0,2 * Math.PI)
ctx.stroke();
ctx.fill();

//nose

ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';

ctx.beginPath(),
ctx.moveTo(198, 186);
ctx.lineTo(130, 206);
ctx.lineTo(202, 207);
ctx.stroke();
ctx.fill();

