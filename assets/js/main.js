/***************************************************
==================== JS INDEX ======================
****************************************************


01. Mobile Menu JS
02. Header Dropdown Static JS
03. Common JS
04. Masonry JS
05. MagnificPopup Image View
06. MagnificPopup Video View
07. Counter JS
08. Back-to-top
09. Smooth Scroll JS
10. Sticky Header JS
11. Open Handlers
12. Close Handlers
13. Scroll Wrapper
14. WebGL Images Hover Animation
15. Service Panel Animation
16. Panel Pin Section
17. MD FAQ Accordion
18. Text Scale Animation
19. Hover Reveal for Image
20. Button Bounce Animation
21. Character Animation
22. Fade Class Active
23. Text Animation Paragraph
24. Text Bounce Animation
25. Portfolio Panel
26. TP Text Perspective
27. TP Text Reveal Animation
28. Scale Animation
29. Image Reveal Animation
30. Process Expand Image
31. AddClass / RemoveClass
32. Ripples Images
33. Scroll with Moving Text
34. TP Text Invert
35. TP Text Invert 2
36. TP Text Invert 3
37. Studio Project Animation
38. Hover Button
39. Random Text Generator in Hover
40. Lowercase Character
41. Split Text into Characters (SplitType)
42. Portfolio Person Image Moving
43. Scroll Scale Up Image
44. Handle Data Speed Attributes


/***************************************************
==================== JS INDEX ======================
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	// 01. mobile menu Js//
	let tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	let tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
		$(tpSideMenu).find('.submenu, .mega-menu').parent().append
			('<button class="tp-menu-close"><i class="fa-solid fa-plus"></i></button>');
	}
	let sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a, .tp-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('.submenu, .mega-menu').slideToggle();
	});

	// 02. header dropdown static Js//
	$('.tp-header-dropdown nav ul li').each(function () {
		if ($(this).find('.mega-menu').length > 0) {
			$(this).addClass('p-static');
		}
	});


	// 03. Common Js//
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});



	// 04. Masonary Js//
	$('.grid').imagesLoaded(function () {
		let $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: 1,
			},
		});

		// filter items on button click
		$('.tp-pr-filter').on('click', 'button', function () {
			let filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		// 	//for menu active class
		$('.tp-pr-filter button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});


	// 05. magnificPopup img view //
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	// 06. magnificPopup video view //
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	// 07. Counter Js //
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	// 08. back-to-top //
	function back_to_top() {

		let btn = $('#back_to_top');
		let btn_wrapper = $('.back-to-top-wrapper');

		windowOn.on('scroll', function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		$(btn).on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// 09. Smooth Scroll Js //
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			let target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 60
				}, 1500);
			}
		});
	}
	smoothSctoll();


	// 10. Sticky Header Js //
	windowOn.on('scroll', function () {
		let scroll = windowOn.scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	// 11. Open Handlers //
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .body-overlay").addClass("opened");
	});

	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area, .body-overlay").addClass("opened");
	});


	// 12. Close Handlers //
	$(".tp-offcanvas-close-btn, .tp-offcanvas-2-close-btn, .tp-search-close-btn, .body-overlay, .tp-offcanvas-menu nav ul li a").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .tp-search-area, .cartmini__area").removeClass("opened cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	// 13. scroll wrapper //
	if (typeof gsap !== 'undefined') {
		var _plugins = [];
		if (typeof ScrollTrigger !== 'undefined') _plugins.push(ScrollTrigger);
		if (typeof ScrollSmoother !== 'undefined') _plugins.push(ScrollSmoother);
		if (typeof ScrollToPlugin !== 'undefined') _plugins.push(ScrollToPlugin);
		if (_plugins.length) gsap.registerPlugin.apply(gsap, _plugins);
	}
	if (typeof ScrollSmoother !== 'undefined' && ScrollSmoother.create && $('#smooth-wrapper').length && $('#smooth-content').length) {
		try {
			ScrollSmoother.create({
				smooth: 1.35,
				effects: true,
				smoothTouch: .1,
				ignoreMobileResize: true
			});
		} catch (e) {
			console.warn('ScrollSmoother init failed:', e);
		}
	}

	// 14. webgl images hover animation //
	if ($('.tp--hover-item').length) {
		let hoverAnimation__do = function (t, n) {
			let a = new hoverEffect({
				parent: t.get(0),
				intensity: t.data("intensity") || void 0,
				speedIn: t.data("speedin") || void 0,
				speedOut: t.data("speedout") || void 0,
				easing: t.data("easing") || void 0,
				hover: t.data("hover") || void 0,
				image1: n.eq(0).attr("src"),
				image2: n.eq(0).attr("src"),
				displacementImage: t.data("displacement"),
				imagesRatio: n[0].height / n[0].width,
				hover: !1
			});
			t.closest(".tp--hover-item").on("mouseenter", function () {
				a.next()
			}).on("mouseleave", function () {
				a.previous()
			})
		}
		let hoverAnimation = function () {
			$(".tp--hover-img").each(function () {
				let n = $(this);
				let e = n.find("img");
				let i = e.eq(0);
				i[0].complete ? hoverAnimation__do(n, e) : i.on("load", function () {
					hoverAnimation__do(n, e)
				})
			})
		}
		hoverAnimation();
	}

	// gsap system
	var tl = gsap.timeline();
	let pr = gsap.matchMedia();


	// 15. service panel animation
	pr.add("(min-width: 1199px)", () => {
		let panels = document.querySelectorAll('.tp-panel-pin-sr')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 10%',
					end: "bottom 99%",
					endTrigger: '.tp-panel-pin-service-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});



	// 16. panel pin section //
	pr.add("(min-width: 1199px)", () => {
		let panels = document.querySelectorAll('.tp-panel-pin');

		panels.forEach((section) => {

			// default value
			let defaultStart = "top 15%";
			let defaultEnd = "bottom 99%";

			// if attribute exists → override
			let startVal = section.dataset.start || defaultStart;
			let endVal = section.dataset.end || defaultEnd;

			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: startVal,
					end: endVal,
					endTrigger: '.tp-panel-pin-area',
					pinSpacing: false,
					markers: false,
				}
			});

		});
	});




	// 17. md-faq-accordion //
	$('.md-faq-accordion, .accordion-items').on("click", function () {
		$(this).addClass('faq-active').siblings().removeClass('faq-active');
	});


	// 18. text-scale-anim //
	const headings = document.querySelectorAll('.text-scale-anim');
	headings.forEach(heading => {
		const textNodes = [];
		heading.childNodes.forEach(node => {
			if (node.nodeType === Node.TEXT_NODE) {
				node.textContent.split(' ').forEach((word, index, array) => {
					const wordSpan = document.createElement('span');
					wordSpan.classList.add('tp-word-span');
					word.split('').forEach(letter => {
						const letterSpan = document.createElement('span');
						letterSpan.classList.add('tp-letter-span');
						letterSpan.textContent = letter;
						wordSpan.appendChild(letterSpan);
					});
					textNodes.push(wordSpan);
					if (index < array.length - 1) {
						textNodes.push(document.createTextNode(' '));
					}
				});
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				textNodes.push(node.cloneNode(true));
			}
		});
		heading.innerHTML = '';
		textNodes.forEach(node => heading.appendChild(node));
		const letters = heading.querySelectorAll('.tp-letter-span');
		letters.forEach(letter => {
			letter.addEventListener('mouseenter', () => {
				gsap.to(letter, {
					scaleY: 1.2,
					y: '5%',
					duration: 0.2,
					ease: 'sine'
				});
			});

			letter.addEventListener('mouseleave', () => {
				gsap.to(letter, {
					scaleY: 1,
					y: '0%',
					duration: 0.2,
					ease: 'sine'
				});
			});
		});
	});



	// 19. hover reveal for image //
	const hoverItem = document.querySelectorAll(".hover-reveal-item");
	function moveImage(e, hoverItem) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[1]) {
			hoverItem.children[1].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item), 100);
		});
	});


	// 20. button bounce animation //
	if ($('.tp-bounce-trigger').length > 0) {
		gsap.set(".tp-bounce", { y: -80, opacity: 0 });
		let mybtn = gsap.utils.toArray(".tp-bounce");
		mybtn.forEach((btn) => {
			let $this = $(btn);
			let tp_delay_value = $this[0].getAttribute("data-delay") || 1;
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-bounce-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1.5,
				delay: tp_delay_value,
				ease: "bounce.out",
				y: 0,
				opacity: 1,
			});
		});
	}

	// 21. Character Animation //
	if ($('.tp-char-animation').length > 0) {
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}

	// 22. fade-class-active //
	pr.add("(min-width: 1199px)", () => {
		if ($(".tp_fade_anim").length > 0) {
			gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
				let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
					tp_duration_value = item.getAttribute("data-duration") || 0.75,
					tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
					tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
					tp_delay_value = item.getAttribute("data-delay") || 0.15,
					tp_ease_value = item.getAttribute("data-ease") || "power2.out",
					tp_anim_setting = {
						opacity: 0,
						ease: tp_ease_value,
						duration: tp_duration_value,
						delay: tp_delay_value,
						x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
						y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
					};
				if (tp_onscroll_value == 1) {
					tp_anim_setting.scrollTrigger = {
						trigger: item,
						start: 'top 85%',
					};
				}
				gsap.from(item, tp_anim_setting);
			});
		}
	});


	// 23. text animation paragraph //
	if ($('.tp_text_anim p').length > 0) {
		let splitTextLines = gsap.utils.toArray(".tp_text_anim p");
		splitTextLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					duration: 2,
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, {
				duration: 1,
				delay: 0.2,
				opacity: 0,
				rotationX: -80,
				force3D: true,
				transformOrigin: "top center -50",
				stagger: 0.1
			});
		});
	}


	// 24. text bounce animation //
	if ($('.tp-text-bounce-trigger').length > 0) {
		gsap.set(".tp-text-bounce", { y: 100, opacity: 0 });
		let mybtn = gsap.utils.toArray(".tp-text-bounce");
		mybtn.forEach((btn) => {
			let $this = $(btn);
			let tp_delay_value = $this[0].getAttribute("data-delay") || 0.15;
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-text-bounce-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1,
				delay: parseFloat(tp_delay_value),
				ease: "back.out(1.7)",
				y: 0,
				opacity: 1,
			});
		});
	}

	// 25. portfolio panel //
	pr.add("(min-width: 767px)", () => {
		let otherSections = document.querySelectorAll('.dgm-portfolio-panel')
		otherSections.forEach((section, index) => {
			gsap.set(otherSections, {
				scale: 1,
			});
			tl.to(section, {
				scale: .8,
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 0',
					end: "bottom 99%",
					endTrigger: '.dgm-portfolio-wrap',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


	// 26. tp-text-perspective //
	gsap.utils.toArray(".tp-text-perspective").forEach(splitTextLine => {
		const delay_value = parseFloat(splitTextLine.getAttribute("data-delay") || 0.5);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 85%',
				duration: 1.5,
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});
		const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });

		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: delay_value,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1
		});
	});


	// 27. tp-text-revel-anim //
	const tp_anim_reveal = document.querySelectorAll(".tp-text-revel-anim");
	tp_anim_reveal.forEach(areveal => {
		const getAttributeValue = (attr, defaultValue) => areveal.getAttribute(attr) || defaultValue;
		const duration_value = parseFloat(getAttributeValue("data-duration", 1));
		const onscroll_value = parseInt(getAttributeValue("data-on-scroll", 1));
		const stagger_value = parseFloat(getAttributeValue("data-stagger", 0.02));
		const data_delay = parseFloat(getAttributeValue("data-delay", 0.05));
		const ease_value = getAttributeValue("data-ease", "circ.out");

		areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "tp-revel-line" });
		const animationProps = {
			duration: duration_value,
			delay: data_delay,
			ease: ease_value,
			y: 80,
			stagger: stagger_value,
			opacity: 0,
		};

		if (onscroll_value === 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
				},
				...animationProps,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, animationProps);
		}
	});



	// 28. scale animation //
	const scaleImage = document.querySelectorAll(".tp-scale-anim");
	scaleImage.forEach((section) => {
		let value1 = section.getAttribute("data-value-1");
		let value2 = section.getAttribute("data-value-2");
		if (windowOn.innerWidth < 1200) {
			value1 = Math.max(.95, value1);
		}
		gsap.fromTo(section, {
			ease: 'sine',
			scale: value1,
		}, {
			scale: value2,
			scrollTrigger: {
				trigger: section,
				scrub: true,
				toggleActions: 'play none none reverse',
			}
		});
	});


	// 29. Image Reveal Animation //
	let tp_img_reveal = document.querySelectorAll(".tp_img_reveal");
	tp_img_reveal.forEach((img_reveal) => {
		let image = img_reveal.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: img_reveal,
				start: "top 70%",
			}
		});

		tl.set(img_reveal, { autoAlpha: 1 });
		tl.from(img_reveal, 1.5, {
			xPercent: -100,
			ease: Power2.out
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.5,
			delay: -1.5,
			ease: Power2.out
		});
	});



	// 30. process expand img
	const items = document.querySelectorAll('.dgm-process-item');

	if (items.length > 0) {
		items[0].classList.add('active');
	}

	items.forEach(item => {
		// Hover effect
		item.addEventListener('mouseenter', () => {
			removeActive();
			item.classList.add('active');
		});

		// Click effect (optional)
		item.addEventListener('click', () => {
			removeActive();
			item.classList.add('active');
		});
	});

	function removeActive() {
		items.forEach(el => el.classList.remove('active'));
	}



	// 31. addClass removeClass //
	$('.tp-offcanvas-2-area .tp-offcanvas-menu > nav > ul > li').on("mouseenter", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
	}).on("mouseleave", function () {
		$(this).siblings().addClass('is-active');
	});



	// 32. ripples imgs //
	imagesLoaded(".ripple-image img", function () {
		$(".ripple-image").each(function () {

			var $container = $(this);
			var $img = $container.find("img").first();
			var imgURL = $img.attr("src");

			// hide the image as we use background-image on container
			$img.hide();

			// Use a standard aspect ratio for portfolio items to avoid huge empty spaces
			// and use background-size: contain so it doesn't crop the actual laptop/phone
			$container.css({
				aspectRatio: "16 / 9", // You can adjust this to 16/9 if preferred
				width: "100%",
				backgroundImage: "url(" + imgURL + ")",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center bottom"
			});

			// apply ripples
			$container.ripples({
				resolution: 400,
				perturbance: 0.03,
				imageUrl: imgURL
			});

		});
	});


	// 33. scroll with moving text
	function moving_text() {
		if ($('.moving-text').length > 0) {
			gsap.utils.toArray('.moving-text').forEach((section, index) => {
				const w = section.querySelector('.wrapper-text');
				const distance = (section.offsetWidth - w.scrollWidth) * 0.25;

				const [x, xEnd] = (index % 2)
					? [distance, 0]
					: [0, distance];

				gsap.fromTo(w, { x }, {
					x: xEnd,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top bottom",
						end: "bottom top",
						scrub: 2,
					}
				});
			});
		}
	}



	// 34. TP Text Invert //
	function tp_text_invert() {
		const split = new SplitText(".tp_text_invert", { type: "lines" });
		split.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});
	}


	// 35. TP Text Invert 2 //
	function tp_text_invert_2() {
		const split_2 = new SplitText(".tp_text_invert_2", { type: "lines" });
		split_2.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});
	}


	// 36. TP Text Invert 3 //
	function tp_text_invert_3() {
		const split_3 = new SplitText(".tp_text_invert_3", { type: "lines" });
		split_3.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});
	}


	// 37. studio-project animation //
	pr.add("(min-width: 767px)", () => {
		function perspective() {
			if ($('.dgs-project-item-wrap').length) {
				gsap.set('.dgs-project-thumb', { perspective: 60, });
				$('.dgs-project-thumb img').each(function () {
					var slide = $(this);
					gsap.fromTo(this, {
						rotationX: 1.8,
						z: '0vh'
					}, {
						rotationX: -.5,
						z: '-2vh',
						scrollTrigger: {
							trigger: slide,
							start: "top+=150px bottom",
							end: "bottom top",
							immediateRender: false,
							scrub: 0.1,
						}
					});
				});
			}
		}
		perspective()
	});


	// 38. hover btn //
	var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});


	// 39. Rendom text genarator in hover //
	document.querySelectorAll('.codetext').forEach((t) => {
		const arr1 = t.innerHTML.split('');
		const arr2 = arr1.map(() => randChar());

		t.onpointerover = () => {
			let step = 0;

			tl.fromTo(
				t,
				{ innerHTML: arr2.join('') },
				{
					duration: arr1.length / 30,
					ease: 'power4.in',
					delay: 0.1,
					onUpdate: () => {
						const progress = Math.floor(tl.progress() * arr1.length);
						if (step !== progress) {

							step = progress;
							arr1.forEach((_, i) => (arr2[i] = randChar()));

							let start = arr1.slice(0, progress).join('');
							let end = arr2.slice(progress).join('');

							if (t.classList.contains('fromRight')) {
								start = arr2.slice(0, progress).join('');
								end = arr1.slice(progress).join('');
							}

							t.innerHTML = start + end;
						}
					},
				}
			);
		};
	});


	// 40. lowercase character //
	function randChar() {
		const chars = "abcdefghijklmnopqrstuvwxyz";
		return chars[Math.floor(Math.random() * chars.length)];
	}

	// 41. Split text into characters using SplitType
	const text = new SplitType('.text', { types: 'chars' });
	const length = text.chars.length;

	text.chars.forEach((char, index) => {
		$(char).css('font-weight', (index + 1) * 0.1 * 800);

		$(char).on('mouseover', function () {
			animate(index);
		});
	});

	function calculate(index, length) {
		const positions = Array.from(Array(length).keys());
		const left = positions.slice(0, index - 1);
		const right = positions.slice(index);
		return { left, right };
	}

	function weightByIndex(index) {
		return (index + 1) * 90;
	}

	function animate(index) {
		const { left, right } = calculate(index + 1, length);

		tl.to(text.chars[index], {
			fontWeight: weightByIndex(0),
		}, "way");

		text.chars.slice(0, index - 1).reverse().forEach((char, i) => {
			tl.to(char, {
				fontWeight: weightByIndex(i),
			}, "way");
		});

		text.chars.slice(index).forEach((char, i) => {
			tl.to(char, {
				fontWeight: weightByIndex(i),
			}, "way");
		});
	}


	// 42. Portfolio Person img moving
	const img = document.getElementById("pp-hero-person-move");

	if (img) {
		document.addEventListener("mousemove", (e) => {

			let x = (window.innerWidth / 2 - e.clientX) / 25;
			let y = (window.innerHeight / 2 - e.clientY) / 25;

			img.style.transform = `translate(${x}px, ${y}px)`;
		});
	}


	// 43. scroll-scale-up-img
	document.querySelectorAll(".scale-up-img").forEach((section) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top bottom",
				end: "bottom center",
				scrub: 1,
				markers: false,
			},
		});

		tl.to(section.querySelector(".scale-up"), {
			scale: 1.15,
			duration: 1,
		});
	});


	// 44. Handle Data Speed Attributes
	function handleDataSpeedAttr() {
		const elements = document.querySelectorAll("[data-speed], [data-speed-original]");
		elements.forEach(el => {
			if (!el.dataset.speedOriginal && el.dataset.speed) {
				el.dataset.speedOriginal = el.dataset.speed;
			}
			if (window.innerWidth < 1200) {
				// attribute remove
				el.removeAttribute("data-speed");
			} else {
				// original value restore
				if (el.dataset.speedOriginal) {
					el.setAttribute("data-speed", el.dataset.speedOriginal);
				}
			}
		});
	}
	handleDataSpeedAttr();

	window.addEventListener("resize", handleDataSpeedAttr);

	$(function () {
		tp_text_invert();
		tp_text_invert_2();
		tp_text_invert_3();
	});

	windowOn.on('load', function () {
		$("#preloader").fadeOut(500);
		moving_text();
	});







})(jQuery);