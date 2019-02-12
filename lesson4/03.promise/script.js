'use strict';


/*const errorPromise = new Promise((resolve, reject) => {
	reject('something went wrong !')
});
	
	errorPromise.catch(error => {
	console.warn('error', error);
});

const getNum = new Promise((resolve, reject) => {
	resolve(10);
	reject('Error message');
});

getNum
.then(num => num * 2)
.then(num => num - 1)
.then(num => num -= 2)
.then(num => num += 10)
.then(result => {
	console.log('result', result);
})
		 
.catch(error => {
		  console.log('error', error)
})  
		 
fetch('https://reqres.in/api/user/2')
.then(res => res.json())
.then(result => {
	console.log('result', result);
})

const myForm = document.querySelector('#js-form');
const  email = document.querySelector('#js-email')
const password = document.querySelector('#js-password')

myForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const emailValue = email.value;
	const passwordValue = password.value;
	
	const credentials = {
		email: emailValue,
		password: passwordValue
	}
	
	fetch('https://reqres.in/api/login', {
		method: 'POST',
		header: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
	.then(response => response.json())
	.then(result => {
		console.log(result);
	})
})*/

const API_KEY = 'LHxPK6uY2A9aYawAzOk4VfdSpheFrUq1';
fetch('https://api.giphy.com/v1/gifs/random/?api_key=' + API_KEY);

