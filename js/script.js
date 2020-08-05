$(function() {
	$('.toggles button').click(function(){
		var	get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
	autoplayHoverPause:true,
  });
});


if ($(window).width() < 420){
	$(".owl-carousel").owlCarousel({
  	items:2,
  	autoplay:true,
    autoplayTimeout:2000,
  });
}