$(document).ready(function(){
  // add class active for scrolling
	$(window).scroll(function(){
		let $sections = $('section');
   		$sections.each(function(i,el){
        let top  = $(el).offset().top-100;
        let bottom = top +$(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
      if  ( scroll > top && scroll < bottom){
        $('.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }	
    })
  });

  // easy scroll
  $(".ph-hero-dots__circle").click(function () {
		let elementClick = $(this).attr("href");
		let destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    
  //slick slider

  $('.ph-range-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.ph-range-left-btn'),
    nextArrow: $('.ph-range-right-btn'),
    responsive: [
      {
        breakpoint: 970,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  });












  
});