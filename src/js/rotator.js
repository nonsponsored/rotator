export class Rotator {
	constructor(trigger) {
		
		// Wait for DOM
		document.addEventListener('DOMContentLoaded', () => {
			[].map.call(document.querySelectorAll(trigger), (rotator) => {
				const rotatorSlide = rotator.querySelectorAll('.rotator__slide'),
					  rotatorSlideCount = rotatorSlide.length;
		
				if ( rotatorSlideCount > 1 ) {
					// Clone First Picture 
					const cloneFirstPicture = rotatorSlide[0].querySelectorAll('picture')[0].cloneNode(true);
					rotator.appendChild(cloneFirstPicture);
					
					// Set Rotator to Active
					rotator.classList.add('js-rotator--active');
					
					// Create Bullets and Set Active Bullet
					var i,
						  rotatorBullets = document.createElement('ul');
					rotatorBullets.className = 'rotator__bullets';
					rotator.appendChild(rotatorBullets);
					for (i = 1; i <= rotatorSlideCount; i++) {
						const li = document.createElement('li'),
							  button = document.createElement('button');
						button.innerHTML = 'Slide '+i;
						rotatorBullets.appendChild(li).appendChild(button);
					}
					const rotatorBulletList = rotator.querySelector('.rotator__bullets'),
						  rotatorBullet = rotatorBulletList.querySelectorAll('button');
					rotatorBullet[0].classList.add('rotator__bullet--active');
					
					// Add Click Event
					rotatorBulletList.addEventListener('click', (e) => {
						if(e.target.matches('BUTTON')) { // If you need IE11 support, have to use: e.target && e.target.nodeName === 'BUTTON'
							// Get Index of li
							const index = Array.prototype.indexOf.call(e.currentTarget.children, e.target.parentElement);
							
							// Remove Current Slide Class
							Array.from( rotatorSlide ).forEach(function(slide){
						    	slide.classList.remove('rotator__slide--current');
						    });
						    // Set Current Slide Class
						    rotatorSlide[index].classList.add('rotator__slide--current');
							// Remove Active Bullet	Class					
							Array.from( rotatorBullet ).forEach(function(bullet){
						        bullet.classList.remove('rotator__bullet--active');
						    });
							// Set Active Bullet Class
							// alternate option to set active bullet: e.target.classList.add('rotator__bullet--active');
							rotatorBullet[index].classList.add('rotator__bullet--active');
						}
					})
				}
			})
		})
	}
}