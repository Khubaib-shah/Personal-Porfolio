(function ($) {
	"use strict";

	$(document).ready(function () {
		if ($('.tp-text-slide-active').length > 0 && typeof Swiper !== 'undefined') {
			new Swiper(".tp-text-slide-active", {
				slidesPerView: 'auto',
				spaceBetween: 22,
				loop: true,
				freemode: true,
				centeredSlides: true,
				allowTouchMove: false,
				speed: 10000,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		if ($('.pp_testimonial_slider_active').length > 0 && typeof Swiper !== 'undefined') {
			new Swiper(".pp_testimonial_slider_active", {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				centeredSlides: true,
				allowTouchMove: false,
				speed: 10000,
				autoplay: {
					delay: 1,
					disableOnInteraction: false,
				},
				breakpoints: {
					576: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					992: { slidesPerView: 2 },
					1200: { slidesPerView: 3 },
					1401: { slidesPerView: 3 },
					1600: { slidesPerView: 4 },
				},
			});
		}
	});
})(jQuery);
