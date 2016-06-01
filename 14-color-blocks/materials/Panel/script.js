$(document).ready(function() {
/*$(".container").click(function(){		// When	I	click	on	coloured block	run	this	code
$('.theButton').first().hide('medium');
});*/
$(".container").click(function(){		// When	I	click	on	<p>	run	this	code
$(this).siblings().fadeTo(1000,0.1);
});
$(".superButton").click(function(){		// When	I	click	on	<p>	run	this	code
$(".container").fadeTo(1000,1);
});
$(".theButton").mouseenter(function(){
        $(this).addClass('makeBlack');
    });
     $(".theButton").mouseleave(function(){
        $(this).removeClass('makeBlack');
    });
});