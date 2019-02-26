'use strict';

$('#js-show-alert').click(() => {
	$('#js-alert').show();
})

$('#js-show-alert').click(() => {
	$('#js-alert').hide();
})

$('#js-slide-example-1').click(() => {
	$('.js-slide-example-links').slideDown();
	$('.js-slide-example-links').fadeIn();
});

$('#js-animation-1')
	.delay(3000)
	.animate({
	left:300
},4000, 'linear');
