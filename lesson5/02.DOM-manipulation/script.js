'use strict';
/*
console.log('h1 content', $('h1').text());
$('h1').text('My page title');
console.log('article html', $('#js-article').html())
$('#js-article').html(`<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>`);
console.log('input value', $('#js-search').val());
$('#js-search').val('Beagles');
console.log($('#js-search').attr('placeholder'));
$('#js-search').attr('placeholder', 'search');
*/

/*
$('#js-search-form')[0].addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = $(js-search).val();
	   if (inputValue === 'Chat') {
    $(js-search-result).text('Miaou!');
	} else {
	$(js-search-result).html()
	}
	$('#js-search-form').html(`<p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>`)
});
*/

/*
const title = document.createElement('h1');
$(title).text('Cats are the weirdest');
$('#js-article-1').append(title);


const article0neParagraph = document.createElement('p');
$(article0neParagraph).text(`He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.`)
$('#js-article-1').append(article0neParagraph);

const article0neParagraph2 = document.createElement('p');
$(article0neParagraph2).text(`I recently found out that my cat, Marv, hates it when I read aloud.`)
$('#js-article-1').append(article0neParagraph2);

const article0neImage = document.createElement('img');
article0neImage.src = 'https://lorempixel.com/400/200';
$(article0neParagraph).after(article0neImage);
*/

$('#js-article-2').empty();

$('#js-article-2').remove();

$('js-alert').addClass('alert-primary');

$('js-alert').removeClass('alert');
$('js-alert').removeClass('alert-primary');


$('js-alert').addClass('alert alert-warning');

	$('js-alert').hasClass('alert-warning'); {
$('js-alert').removeClass('alert-warning');
}

$('#js-btn')[0].addEventListener('click', () => {
	$('#js-alert').toggleClass('alert-success');
});

/*console.log($('#js-btn').css('background-color'));
$('#js-btn').css({
	color: '#fff2d5'
	'border-radius': '3px'
})*/

/*
Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.
*/



if ($('#js-danger-alert').hasClass('alert alert-danger')){
	$('p').addClass('text-danger')
	$('#js-danger-alert-btn').removeClass('btn btn-success')
}



