$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".card").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});/*
	$("p").click(function(){		
		$("p").css("color", "red");
	});
	$("h2").hover(function(){		
		$("h2").css("background-color", "lightblue");
	});
	$("h2").hover(function(){		
		$(".stream3").css("font-size", "36px");
	});
	$(".bottom_button").mouseenter(function(){		
		$("body").css("background-color", "black");
	});
	$(".bottom_button").mouseleave(function(){		
		$("body").css("background-color", "gray");
	});
	$("p").click(function() {
		$("p").children("a").css("background-color", "yellow");
	});
	$("div").click(function(){
      $("p").slideToggle('slow');    
  });
	$(".card_image").click(function(){
      $(".card_image").sibling("p").slideDown('slow');    
  });*/
	$(".card").click(function(){
	$(".card").toggleClass("pink");	
	});
	$("#selected_btn").on("click", function(){
		$('.card').not('.highlight_stream').hide();
	});
	$("#all_btn").on("click", function(){
		$('.card').show();
	});
});