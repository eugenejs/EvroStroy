$( document ).ready(function() {

	$('.hamburger').click(function(){

		$(this).toggleClass('is-active')

		if($(this).hasClass('is-active')) $('.menu-wrapper').addClass('menu_visible')
		else $('.menu-wrapper').removeClass('menu_visible')
	})



	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnFocus: false,
		touchMove: false,
		swipe: false
	});

	$('.clients__team').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		touchMove: false,
		swipe: false
	});

	$('.services').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
		},
		{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		},
		]
	});



	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});



});

$(window).scroll(function(){

	st = $(this).scrollTop()

	if(st > $('.contacts').height()) $('.menu-wrapper').addClass('menu_fixed')
	else $('.menu-wrapper').removeClass('menu_fixed')
	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()


});

$(window).resize(function(){

	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()

})
