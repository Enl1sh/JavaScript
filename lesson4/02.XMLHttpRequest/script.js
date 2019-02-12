'use strict';

// http https://swapi.co/api/people/1/


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     console.log(xhttp.responseText)
//     const result = xhttp.responseText;
//     const parsedResult = JSON.parse(result);
//     const el = document.createElement('div')
//     el.innerHTML =`
//     <p>Nom: ${parsedResult.name}</p>
//     <p>Sexe: ${parsedResult.gender}</p>
//     <p>Date de naissance: ${parsedResult.birth_year}</p>
//     `
//     document.querySelector('body').appendChild(el);
//   }
  
// };
// xhttp.open('GET', 'https://swapi.co/api/people/1/', true);
// xhttp.send();




let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    console.log(xhttp.responseText)
    const rawresult = xhttp.responseText;
    const result = JSON.parse(rawresult);

    result.results.forEach(person => {
        const el = document.createElement('div')
            el.innerHTML =` 
            <p>Nom: ${person.name}</p>
            <p>Sexe: ${person.gender}</p>
            <p>Date de naissance: ${person.birth_year}</p>
            `
            document.querySelector('body').appendChild(el);
    })

    console.log(result);
  }
};
xhttp.open('GET', 'https://swapi.co/api/people/?search=Skywalker', true);
xhttp.send();