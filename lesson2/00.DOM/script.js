const myDiv = document.querySelector('div');
const paragraphToDelete = document.querySelector ('div p');
myDiv.removeChild(paragraphToDelete);

myDiv.innerHTML = ''; // removes everything

/*myDiv.className = 'my-class another-class'; //ajouter nom de class
myDiv.classlist.add('my-class'); //ajouter nom de class
myDiv.classlist.remove('my-class'); //supprimer non de class*/

const myBody = document.querySelector('body');
const el = document.createElement('div');
el.innerText = 'something something';
console.log('el', el)
myBody.appendChild(el);
myBody.prepend(el);
