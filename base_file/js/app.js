new WOW().init();
$(document).ready(function(){
	$("body").addClass("wow fadeIn");
	$("#headline h1").addClass("wow fadeInUp");
	$("#headline h2").addClass("wow fadeInUp");
	$("#about h1").addClass("wow fadeInDown");
	$("#about p").addClass("wow fadeInDown");
	$("#about a").addClass("wow fadeInDown");
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});	
	
});