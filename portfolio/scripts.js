$(document).ready(function($) {

$('.container-inner').on('mousemove', function(event) {
	$('.hard-mode').change(function() {
			if ($(this).is(':checked')) {
				$('body').addClass('hard-mode-on');
			}
			else {
				$('body').removeClass('hard-mode-on');
				$('.container-inner').css('transform', 'translate(0, 0)');
			}
	});


	if ($('.hard-mode').is(':checked')) {
				// Calculate the distance to move the element away from the cursor
				const moveDistance = 200;
				
				// Get the position of the mouse relative to the container-inner element
				const mouseX = event.pageX;
				const mouseY = event.pageY;
				const elementX = $(this).offset().left + $(this).width() / 2;
				const elementY = $(this).offset().top + $(this).height() / 2;
				
				// Calculate the direction to move the element
				const deltaX = elementX - mouseX;
				const deltaY = elementY - mouseY;
				const angle = Math.atan2(deltaY, deltaX);
				
				// Calculate the new position of the element
				const newX = Math.cos(angle) * moveDistance;
				const newY = Math.sin(angle) * moveDistance;
				
				// Apply the transform to move the element
				$(this).css('transform', `translate(${newX}px, ${newY}px)`);
		} else {
		}
	});
	
	$('.container-inner').on('mouseleave', function() {
			$(this).css('opacity', '1');
	});
            
            
		$('.lightbox-trigger').click(function(e) {
				e.preventDefault();
				var image_href = $(this).attr("href");
				if ($('#lightbox').length > 0) { // #lightbox exists
						$('#content').html('<img src="' + image_href + '" />');
						$('#lightbox').fadeIn('fast');
				}

				else {
						var lightbox = 
						'<div id="lightbox">' +
								'<p>Click to close</p>' +
								'<div id="content">' +
										'<img src="' + image_href +'" />' +
								'</div>' +	
						'</div>';
						$('body').append(lightbox);
				}

		});

		$('#lightbox').on('click', function() {
				$('#lightbox').fadeOut('fast');
		});
		
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop();
			if (scrollPos > 200) {
					$('.name').addClass('scrolled');
			} else {
					$('.name').removeClass('scrolled');
			}
			
			if (scrollPos > 650) {
					$('.name').addClass('scrolled2');
			} else {
					$('.name').removeClass('scrolled2');
			}
			
			if (scrollPos > 1200) {
					$('.name').addClass('scrolled3');
			} else {
					$('.name').removeClass('scrolled3');
			}
	});


	
});