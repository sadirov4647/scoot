jQuery(function( $ ){

    $('.faq-list .question').click( function(){
		$(this).parent().find('.answer').slideToggle('fast');
		$(this).toggleClass('on');
		return false;
	});

});