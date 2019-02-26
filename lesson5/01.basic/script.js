'use strict';
$(document).ready(() => {
    const myDivs = $('div');
	console.log('myDivs', myDivs);
	console.log('js-paragraph', $('.js-paragraph'));
	console.log('js-unique-paragraph', $('.js-unique-paragraph'));
	console.log('first h3', $('.first:h3'));
	console.log($('tr:first th:first'));
	console.log($('tr td:first'))
	console.log($('a'))
	console.log('liens externes', $('a[target=_blank]'));
	console.log('liens externes', $('a[target!=_blank]'))
	console.log('form buttons', $('form :button'))
});