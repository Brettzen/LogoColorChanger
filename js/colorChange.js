var colorClass = ["blue", "red", "green", "gray"];
var i = 0;

function logoTurn() {
	$("img").animate({


	});
}

function classChange() {
	if(i > 2) { 
		i = 0;
	} else {
		i++;
	}
}

function colorChange() {
	$('body').removeClass(colorClass[i]);
	classChange();
	$('body').addClass(colorClass[i]);
	console.log('color is now ' + colorClass[i]);

}

$('img').click(function() {
	colorChange();
});