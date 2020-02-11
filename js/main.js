$(document).ready(function(){
    $(".ph-hero-dots__circle").click(function () {
		let elementClick = $(this).attr("href");
		let destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    
});