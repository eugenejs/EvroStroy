$( document ).ready(function() {

	$('.hamburger').click(function(){

		$(this).toggleClass('is-active')

		if($(this).hasClass('is-active')) $('.menu-wrapper').addClass('menu_visible')
		else $('.menu-wrapper').removeClass('menu_visible')
	})

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
