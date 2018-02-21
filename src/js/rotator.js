var manageRotator = function(trigger) {
	'use strict';

	[].map.call(document.querySelectorAll(trigger), function($rotator){
		var $rotatorSlide = $rotator.querySelectorAll('.rotator__slide'),
			$rotatorSlideCount = $rotatorSlide.length;

		if ( $rotatorSlideCount > 1 ) {
			// clone first picture 
			var cloneFirstPicture = $rotatorSlide[0].querySelectorAll('picture')[0].cloneNode(true);
			$rotator.appendChild(cloneFirstPicture);
			
			// set rotator to active
			$rotator.classList.add('js-rotator--active');
			
			// create bullets
			var i,
				$rotatorBullets = document.createElement('ul');
			$rotatorBullets.className = 'rotator__bullets';
			$rotator.appendChild($rotatorBullets);
			for (i = 1; i <= $rotatorSlideCount; i++) {
				var li = document.createElement('li');
				$rotatorBullets.appendChild(li);
			}
			var $rotatorBulletList = $rotator.querySelector('.rotator__bullets'),
				$rotatorBullet = $rotatorBulletList.querySelectorAll('li');
			$rotatorBullet[0].classList.add('rotator__bullet--active');
			
			// add click event
			$rotatorBulletList.addEventListener('click', function (e) {
				if(e.target && e.target.nodeName === 'LI') { // could use e.target.matches('LI' if don't need IE11 support
					// get index of li
					var index = Array.prototype.indexOf.call(this.children, e.target);
					// remove current slide class
					Array.from( $rotatorSlide ).forEach(function(slide){
				    	slide.classList.remove('rotator__slide--current');
				    });
				    // set current slide class
				    $rotatorSlide[index].classList.add('rotator__slide--current');
					// remove active bullet	class					
					Array.from( $rotatorBullet ).forEach(function(bullet){
				        bullet.classList.remove('rotator__bullet--active');
				    });
					// set active bullet class
					// alternate option to set active bullet: e.target.classList.add('rotator__bullet--active');
					$rotatorBullet[index].classList.add('rotator__bullet--active');
				}
			}, false);
		}
	});	
};
window.addEventListener('load', function() {
	manageRotator('.js-rotator');
}, false);