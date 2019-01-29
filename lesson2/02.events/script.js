const myBtn = document.querySelector('#js-btn');

myBtn.addEventListener('click', () => {
	console.log('clicked!');
	//myBtn.style.color = 'green';
	myBtn.classList.add('btn-success');
});

myBtn.addEventListener('mousecenter', () => {
	//myBtn.style.color = 'green';
	myBtn.classList.add('btn-danger');
});

myBtn.addEventListener('mouseleave', () => {
	myBtn.classlist.remove('btn-danger');
	myBtn.classList.add('btn-success');
	myBtn.style.color = 'blue';
});

window.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	console.log('Bouton droit de la souris a été cliqué')
})

const mtForm = document.querySelector('#js-form');

myForm.addEventListener('submit', (event) => {
	event.preventdefault();
	console.log('form submitted');
})

const myEmail = document.querySelector('#js-email');
myEmail.addEventListener('keyup', () => {
	console.log(myEmail.value);
})

const myPassword = document.querySelector('#js-password');
myEmail.addEventListener('keydown', () => {
	console.log(myPassword.value);