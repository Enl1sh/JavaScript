'use strict';


// Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1

console.log('2 > 1', 2 > 1);

console.log('20 >= 10', 20 >= 10);

console.log('4 !==6', 4 !== 6);

console.log(`'2' === 2`, '2' === 2);
console.log(`0 !== '0'`, 0 !== '0');


if (5 > 0 && 5 < 10) {
	console.log('First');
} else {
	console.log('Second');
}

//Ecrivez en ligne de code un moyen de vérifier si 20 divisé par 2 est supérieur ou égal à 10 OU inférieur à 15 dans la même expression. Si vrai, loggez 'Yes', sinon loggez 'No'.

if (`'20/2' >= '10', '20/2' <15`) {
	console.log('Yes');
} else {
	console.log('no');
}

const username = prompt('Comment vous appelez ?');
console.log('username', username);

if (username) {
	alert(`Bievenue ${username}`)
} else {
	alert ('Quel est votre prénom ?')
}

const isConnected = true;
const userStatus = 2;

if (isConnected === true) {
	if (userStatus === 0) {
		console.log('Hello %username');
	} else if (userStatus === 1) {
		console.log('hello powerful');
	} else {
		console.log('Hello owner');
	}
} else {
	consolde.log('Please, connect');
}