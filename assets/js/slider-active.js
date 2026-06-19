(function ($) {
	"use strict";


	// ******* home-1 tp testimonial active -1 *******
	var testimonial = new Swiper(".tp_testimonial_active", {
		slidesPerView: 2,
		spaceBetween: 14,
		loop: true,
		freemode: true,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			576: {
			slidesPerView: 3,
			},
			768: {
			slidesPerView: 3,
			},
			992: {
			slidesPerView: 4,
			},
			1200: {
			slidesPerView: 4,
			},
		}
	});

	// ******* home-1 tp testimonial active -2 *******
	var testimonial_2 = new Swiper(".tp_testimonial_active-2", {
		slidesPerView: 2,
		spaceBetween: 14,
		loop: true,
		freemode: true,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
			reverseDirection: true,
		},
		breakpoints: {
			576: {
			slidesPerView: 3,
			},
			768: {
			slidesPerView: 3,
			},
			992: {
			slidesPerView: 4,
			},
			1200: {
			slidesPerView: 4,
			},
		}
	});
	
	
	//******* home-1 tp instagram active-1 *******
	var swiper = new Swiper(".tp_instagram_active", {
		spaceBetween: 20,
		slidesPerView: 2,
		loop: true,
		breakpoints: {
			576: {
			slidesPerView: 3,
			centeredSlides: true,
			},
			768: {
			slidesPerView: 4,
			},
			992: {
			slidesPerView: 5,
			},
			1200: {
			slidesPerView: 5,
			},
		}
	});

	
	//******* Inner about us active-1 *******
	var swiper = new Swiper(".tp_about_us_instagram_active", {
		spaceBetween: 20,
		slidesPerView: 'auto',
		loop: true,
		freemode: true,
		speed: 10000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		// breakpoints: {
		// 	576: {
		// 	slidesPerView: 3,
		// 	centeredSlides: true,
		// 	},
		// 	768: {
		// 	slidesPerView: 4,
		// 	},
		// 	992: {
		// 	slidesPerView: 5,
		// 	},
		// }
	});
	

	//******* home-1 text-slider *******
	var tp_text_slide = new Swiper(".tp-text-slide-active", {
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


	//******* home-2 testimonial-slider *******
    var md_testimonial = new Swiper(".md_testimonial_slider_active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
		},
		breakpoints: {
			576: {
			slidesPerView: 2,
			},
			768: {
			slidesPerView: 2,
			},
			992: {
			slidesPerView: 3,
			},
			1200: {
			slidesPerView: 3,
			},
			1401: {
			slidesPerView: 4,
			},
			1750: {
			slidesPerView: 5,
			},
		},
    });



	// ******* home-3 tp hero slider active *******
	var dgs_hero_slider = new Swiper(".dgs_hero_slider_active", {
		slidesPerView: 'auto',
		loop: true,
		freemode: true,
		spaceBetween: 24,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});


	// ******* home-3 tp testimonial active -1 *******
	var dgs_testimonial = new Swiper(".dgs_testimonial_active", {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		speed:1000,
		autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		},
	});



	//******* home-4 testimonial-sliderr *******
	var cr_testimonial = new Swiper(".cr-testimonial-slider-active", {
		slidesPerView: 1,
		loop: true,
		arrow: false,
		spaceBetween: 0,
		// speed: 1000,
		// autoplay: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".cr-testimonial-arrow-btn-next",
			prevEl: ".cr-testimonial-arrow-btn-prev",
		},
    });


	//******* home-6 testimonial-slider *******
    var md_testimonial = new Swiper(".pp_testimonial_slider_active", {
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
			576: {
			slidesPerView: 1,
			},
			768: {
			slidesPerView: 2,
			},
			992: {
			slidesPerView:2,
			},
			1200: {
			slidesPerView: 3,
			},
			1401: {
			slidesPerView: 3,
			},
		},
    });


	//******* home-3 brand-slider *******
	var dgs_brand_slide = new Swiper(".dgs-brand-slide-active", {
		slidesPerView: 3,
		loop: true,
		freemode: true,
		spaceBetween: 22,
		allowTouchMove: false,
		speed: 3000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			576: {
			slidesPerView: 3
			,
			},
			768: {
			slidesPerView: 4,
			},
			992: {
			slidesPerView: 5,
			},
			1200: {
			slidesPerView: 6,
			},
			1401: {
			slidesPerView: 6,
			},
		},
	});


	//******* home-4 text brand-slider *******
	var cr_brand_slide = new Swiper(".cr-brand-slide-active", {
		slidesPerView: "auto",
		loop: true,
		freemode: true,
		spaceBetween: 50,
		allowTouchMove: false,
		speed: 12000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});


	//******* home-4 text brand-slider *******
	var cr_brand_slide_2 = new Swiper(".cr-brand-slide-active-2", {
		slidesPerView: 6,
		loop: true,
		freemode: true,
		spaceBetween: 50,
		allowTouchMove: false,
		speed: 12000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});



	//******* home-4 logo brand-slider *******
	var cr_brand_logo_slide = new Swiper(".cr-brand-logo-slide-active", {
		slidesPerView: 2,
		loop: true,
		freemode: true,
		spaceBetween: 0,
		allowTouchMove: true,
		speed: 5000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			576: {
			slidesPerView: 3,
			},
			768: {
			slidesPerView: 4,
			},
			992: {
			slidesPerView: 5,
			},
			1401: {
			slidesPerView: 6,
			},
		},
	});


	
	//******* home-8 Team slider *******
	var studio_team = new Swiper(".studio_team_slider-active", {
		slidesPerView: 2,
		loop: true,
		autoplay: false,
		spaceBetween: 33,
		centeredSlides: true,
		// speed: 1000,
		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
		breakpoints: {
			576: {
			slidesPerView: 2,
			},
			768: {
			slidesPerView: 3,
			},
			992: {
			slidesPerView: 4,
			},
			1200: {
			slidesPerView: 4,
			},
			1401: {
			slidesPerView: 5,
			},
		},

    });


	//******* Inner portfolio-details slider *******
	var portfolio_details = new Swiper('.tp-pd-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 20,
		speed: 1000,
		pagination: {
			el: ".tp-pd-dot",
			clickable: true,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	//******* Inner postbox-slider- slider *******
	var postbox_active = new Swiper('.postbox-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			}
		},
		a11y: false,

		// Navigation arrows
		navigation: {
			prevEl: '.postbox-arrow-prev',
			nextEl: '.postbox-arrow-next',
		},

	});

	





	let lastPercent = 0;

	function updateProgress(current, total) {
	  const targetPercent = Math.round((current / (total - 1)) * 100);
	  const circle = document.querySelector('.circle');
	  const text = document.querySelector('.percentage-text');
	
	  let currentPercent = lastPercent;
	
	  const interval = setInterval(() => {
		if (currentPercent === targetPercent) {
		  clearInterval(interval);
		} else {
		  currentPercent += (currentPercent < targetPercent) ? 1 : -1;
		  circle.setAttribute('stroke-dasharray', `${currentPercent}, 100`);
		  text.textContent = `${currentPercent}%`;
		}
	  }, 10);
	
	  lastPercent = targetPercent;
	}
	










})(jQuery);