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

	$('.team-people').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: 'linear',
		arrows: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		prevArrow: $('.team-prev'),
		nextArrow: $('.team-next'),
		responsive: [
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
		},
		{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
		},
		{
		breakpoint: 568,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		},
		]
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
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 15
        });
    }



	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		if($('.hamburger').hasClass('is-active')) $('.hamburger').click()
		return false;
	});

	$("a[href='#home']").click(function() {
		$("html, body").animate({ scrollTop: $(".header").offset().top - 200 }, "slow");
		if($('.hamburger').hasClass('is-active')) $('.hamburger').click()
		return false;
	});

	$("a[href='#about']").click(function() {
		$("html, body").animate({ scrollTop: $(".about").offset().top - 200 }, "slow");
		if($('.hamburger').hasClass('is-active')) $('.hamburger').click()
		return false;
	});

	$("a[href='#gallery']").click(function() {
		$("html, body").animate({ scrollTop: $(".gallery").offset().top - 200 }, "slow");
		if($('.hamburger').hasClass('is-active')) $('.hamburger').click()
		return false;
	});

	$("a[href='#subscribe']").click(function() {
		$("html, body").animate({ scrollTop: $(".subscribe").offset().top - 200 }, "slow");
		if($('.hamburger').hasClass('is-active')) $('.hamburger').click()
		return false;
	});



});

$(window).scroll(function(){

	st = $(this).scrollTop()

	if(st > $('.contacts').height()) $('.menu-wrapper').addClass('menu_fixed')
	else $('.menu-wrapper').removeClass('menu_fixed')
	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()

	if($(this).scrollTop() > 500) $('.btn_top').css({'bottom' : '15px'})
	else $('.btn_top').css({'bottom' : '-100px'})


});

$(window).resize(function(){

	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()

})
