function logoTurn() {
	$("img").animate({


	});
}

function colorChange() {
	$('body').toggleClass("red");
	console.log('color Changed');
}

$('img').click(function() {
	colorChange();
});