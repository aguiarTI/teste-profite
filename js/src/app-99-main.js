/** ========================
============================
@project    : Profite
@version    : 1.0
@author     : Thiago Aguiar - thiago.aguiar86@gmail.com
@copyright  : 2017
============================
begin
=========================**/

// feature gallery swipe plugin
var swiper = new Swiper('section[name="banner"] .swiper-container', {
	pagination: 'section[name="banner"] .pagination',
	paginationClickable: true,
    prevButton: 'a.prev',
    nextButton: 'a.next',
	spaceBetween: 0,
	loop: true,
	autoplay: 3000,
	keyboardControl: true
});

var swiper = new Swiper('section[name="product"] .swiper-container', {
    // pagination: '.pagination-product',
    paginationClickable: true,
    slidesPerView: 4,
    // loop: true,
	keyboardControl: true,
    autoplay: 2000,
    breakpoints: {
    // when window width is <= 480px
    600: {
      slidesPerView: 1
    },
    
    // when window width is <= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is <= 640px
    1050: {
      slidesPerView: 3
    },

    // when window width is <= 320px
	1210: {
      slidesPerView: 3
      // spaceBetween: 10
    },
  }
});

// more items gallery quality section
var qualidadePhotoGallery = {
	init: function() {
		this.choose();
		this.items();
		this.modal();
	},
	choose: function() {
		var element = $('#qualidade .content nav ul li');
		element.on({
			mouseenter: function() {
				element.addClass('grayscale');
				$(this).removeClass('grayscale');
			},
			mouseleave: function() {
				element.removeClass('grayscale');
			}
		});
	},
	items: function() {
		var container = $('#qualidade, #empresa');
		var box = container.find('.content nav.secondary');
		var element = container.find('.content .more');

		element.on({
			click: function() {
				$(this).css('display', 'none');
				box.css('display', 'block');
			}
		});
	},
	modal: function() {
		var element = $('#qualidade .content nav ul li a');
		var modal = $('#qualidade .modal');
		var close = modal.find('.close');

		element.on({
			click: function() {
				var path = $(this).attr('data-uri');
				modal.find('img').attr('src', path);

				$('body').css({"overflow": "hidden"}).scrollTop(0);
				modal.css('display', 'block');
			}
		});
		close.on({
			click: function() {
				var elements = $('body, .modal');
				elements.removeAttr('style');
			}
		});
	}
}

// execute functions

/** ========================
end
=========================**/