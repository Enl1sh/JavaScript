const myDivs = document.getElementsByTagName ('div');
console.log('myDivs', myDivs);

const myDivs2 = document.querySelectorAll('div');
console.log('myDiv2', myDivs2)

/*const myParagraphs = document.getElementsByClassName('secondary-paragraph');
console.log('myParagraphs' myParagraphs);

const myParagraphs2 = document.querySelectorAll('.secondary-paragraph')
console.log('myParagraphs2' myparagraphs2);*/

const myUniqueEl = document.getElementById('js-unique-el');
console.log('myUniqueEl', myUniqueEl);

const myUniqueEl2 = document.querySelector('#js-unique-el');
console.log('myUniqueEl2', myUniqueEl2);

const myParagraphsInDiv = document.querySelectorAll('div p');
console.log('myParagraphsInDiv', myParagraphsInDiv);

const mySpansPreceededByDiv = document.querySelectorAll('div + span');
console.log('mySpansPreceededByDiv', mySpansPreceededByDiv);

/*Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.*/
const firstParagraph = document.querySelector('p');
console.log('firstParagraph', firstParagraph);
/*SetTimeout (() => {*/
firstParagraph.innerText = 'I am the first paragraph';
/*}, 3000);*/
/*Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.*/
const secondParagraph = document.querySelector('.second-p');
secondParagraph.innerHTML ='<span>Hello</span>';
console.log('secondParagraph.innerHTML', secondParagraph.innerHTML);

/*Modifiez les attributs width à 50% et height à 'auto' de l'image.*/

const myImg = document.querySelector('img');
console.log('myImg', myImg);
myImg.setAttribute('width', '50%');
myImg.setAttribute ('height', 'auto');

/*Ajoutez un attribut alt non vide à l'image.*/

myImg.setAttribute('alt', 'Random image');

/*Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.*/

const myParagraphInDiv = document.querySelector('div p');
console.log('myParagraphInDiv', myParagraphInDiv);
myParagraphInDiv.style.color = 'blue';
/*myParagraphInDiv.setAttribute('stye, color : red')*/
myParagraphInDiv.style.fontsize = '1.5rem';








