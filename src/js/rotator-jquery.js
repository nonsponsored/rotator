$.fn.rotator = function(){
	'use strict';
	return this.each(function(){
		const $rotator = $(this),
			$rotatorSlide = $(this).find('.rotator__slide'),
        	$rotatorSlideCount = $rotatorSlide.length;
        		
		if ( $rotatorSlideCount > 1 ) {
			// clone first picture
			$rotatorSlide.first().find('picture').clone().appendTo($rotator);
			
			// set rotator to active
			$rotator.addClass('js-rotator--active');
		
			// create bullets
			let $i,
				$rotatorBullets = $('<ul class="rotator__bullets"></ul>');
				$rotatorBullets.appendTo( $rotator );
			for ($i = 1; $i <= $rotatorSlideCount; $i++) {
				$rotatorBullets.append('<li><button>Slide '+$i+'</button></li>');
			}
			const $rotatorBullet = $rotatorBullets.find('button');
			$rotatorBullet.first().addClass('rotator__bullet--active');
			
			// add click event
			$rotatorBullet.on('click', function() {
				var $bulletIndex = $(this).parent().index();
				$rotatorSlide.removeClass('rotator__slide--current').eq($bulletIndex).addClass('rotator__slide--current');
				$rotatorBullet.removeClass('rotator__bullet--active');
				$(this).addClass('rotator__bullet--active');
			});
		}
	});
};
$(function(){
	$('.js-rotator').rotator();
});