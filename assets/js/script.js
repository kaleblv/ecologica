;(function($){
	'use strict';
	var $win = $(window), $body_m = $('body');
	// Sticky
	var $is_sticky = $('.is-sticky');
	if ($is_sticky.length > 0 ) {
		var $navm = $('#mainnav').offset();
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991) {
				if($scroll > $navm.top+4 ){
				  if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
				} else {
				  if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
				}
			} else {
				if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
			}
		});
	}
	// Slider
	var $slider = $('#slider');
	if ($slider.length > 0 ) {
	$slider.carousel({ interval:6000, pause: 'null' });
	}
	//Carousel
	var $has_carousel = $('.has-carousel');
	if ($has_carousel.length > 0 ) {
		$has_carousel.each(function(){
			var $self = $(this);
			var c_item = ($self.data('items')) ? $self.data('items') : 4;
			var c_item_t = (c_item >= 3) ? 3 : c_item;
			var c_item_m = (c_item_t >= 2) ? 2 : c_item_t;
			var c_delay =($self.data('delay')) ? $self.data('delay') : 4000;
			var c_auto =($self.data('auto')) ? true : false;
			var c_loop =($self.data('loop')) ? true : false;
			var c_dots = ($self.data('dots')) ? true : false;
			var c_navs = ($self.data('navs')) ? true : false;
			var c_mgn = ($self.data('margin')) ? $self.data('margin') : 30;
			$self.owlCarousel({
				navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
				items: c_item, loop: c_loop, nav: c_navs, dots: c_dots, margin: c_mgn,
				autoplay: c_auto, autoplayTimeout: c_delay, autoplaySpeed: 700,
				responsive:{ 0:{ items:1 }, 480:{ items: c_item_m }, 768:{ items: c_item_t }, 1170:{ items: c_item } }
			});
		});
	}
	// LogoCarousel
	var $logo_carousel = $('.logo-carousel');
	if ($logo_carousel.length > 0 ) {
		$logo_carousel.owlCarousel({
			items: 5, loop: true, margin: 30, responsive:{0:{ items:2 }, 379:{ items:3 }, 720:{ items:4 }, 1280:{ items:6 } }
		});
	}
	// Parallax
	var $parallax = $('.has-parallax');
	if ($parallax.length > 0 ) {
		$parallax.each(function() {
			$(this).parallaxie({ speed: 0.3, offset: 0 });
		});
	}
	// Active page menu when click
	var url = window.location.href;
	var $nav_link = $(".nav li a");
	$nav_link.each(function() {
		if (url === (this.href)) {
		$(this).closest("li").addClass("active");
		}
	});
	// Preloader
	var $preload = $('#preloader');
	if ($preload.length > 0) {
	$win.on('load', function() {
		$preload.children().fadeOut(300);
		$preload.delay(150).fadeOut(500);
		$body_m.delay(100).css({'overflow':'visible'});
	});
	}
	// ScrollDown to
	var $scrollBtn = $('.scroll-to');
	if($scrollBtn.length > 0){
	$scrollBtn.on('click', function(){
		$('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 500);
		return false;
	});
	}
	// Google map initialize

  // Villa
  if ($('#gmapVilla').length) {
    let map1 = new GMaps({
        div: '#gmapVilla',
        lat: 17.9798556,
    		lng: -92.9477898,
        zoom: 15,
        styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1c1c1c"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 17
                },
                {
                    "color": "#333333"
                }
            ]
        }
    ]
    });

    map1.addMarker({
      lat: 17.9798556,
  		lng: -92.9477898,
  		title: 'Villahermosa',
  		icon: '../../img/map-marker.png'
    });
  }


  // Carmen
  if ($('#gmapCarmen').length) {
    let map2 = new GMaps({
        div: '#gmapCarmen',
        lat: 18.6440113,
        lng: -91.8223956,
        zoom: 15,
        styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1c1c1c"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 17
                },
                {
                    "color": "#333333"
                }
            ]
        }
    ]
    });

    map2.addMarker({
      lat: 18.6440113,
      lng: -91.8223956,
      title: 'Cd. del Carmen',
      icon: '../../img/map-marker.png'
    });
  }




	// ImageBG
	var $imageBG = $('.imagebg');
	if ($imageBG.length > 0) {
	$imageBG.each(function() {
		var $this = $(this), $this_img = $this.find('img'), img_src = $this_img.attr('src');
		if(img_src!=='' && typeof img_src !=='undefined') {
			$this.addClass('bgloaded').css('background-image', 'url('+ img_src +')');
		}
	});
	}
	// Gallery Filtering
	var $filtered  = $('.gallery-filter ul'), $filterLi = $('.filter-menu li');
	if ($filterLi.length > 0) {
	// Active -item
	$filterLi.on('click', function () {
		$filterLi.removeClass('active');
		$(this).addClass('active');
	});
	// Filter -init()
	$win.on('load', function() {
		$filtered.filterizr({
			delay: 25
		});
	});
	}
	// Gallery Popup
	var $gallery = $('.gallery-lightbox');
	if ($gallery.length > 0) {
	  $gallery.magnificPopup({
		delegate: 'a',
		type:'image',
		gallery: { enabled: true },
		image: { titleSrc: function (item) {
			var caption = '', title = item.el.find('img').attr('title'), subtitle = item.el.find('img').attr('alt');
			if (typeof title!=='undefined' && title !=='') {
			  caption = caption + title;
			}
			if (typeof subtitle!=='undefined' && subtitle !=='') {
			  if (typeof title==='undefined' || title ==='') {
				caption = caption + subtitle;
			  } else {
				caption = caption + '<small>' + subtitle + '</small>';
			  }
			}
			if (caption==="") {
			  caption = item.el.attr('title');
			}
			return caption;
		  }
		},
		zoom: { enabled: true }
	  });
	}

	// Image Single Popup
	var $image = $('.single-lightbox');
	if ($image.length > 0) {
	$image.magnificPopup({
		gallery: { enabled: true },
		type:'image'
	  });
	}
	// FORMS
	var contactForm = $('#contact-us'),
	  quoteForm = $('#quote-request');
	if (quoteForm.length > 0 || contactForm.length > 0) {
	  if( !$().validate || !$().ajaxSubmit ) {
		  console.log('quoteForm: jQuery Form or Form Validate not Defined.');
		  return true;
	  }
	  // Quote Form - home page
	  if (quoteForm.length > 0) {
		  var selectRec = quoteForm.find('select.required'),
		  qf_results = quoteForm.find('.form-results');
		  quoteForm.validate({
			ignore: [],
			errorPlacement: function(error, elm) {
			  if (elm.is('select.required')) { error.insertAfter(elm.next('.nice-select')); } else { error.insertAfter(elm); }
			},
			invalidHandler: function () { qf_results.slideUp(400); },
			submitHandler: function(form) {
			  qf_results.slideUp(400);
			  $(form).ajaxSubmit({
				target: qf_results, dataType: 'json',
				success: function(data) {
				  var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
				  qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
				  if (data.result !== 'error') { $(form).clearForm(); }
				}
			  });
			}
		  });
		  selectRec.on('change', function() { $(this).valid(); });
	  }
	  // Contact Form - contact page
	  if (contactForm.length > 0) {
		var cf_results = contactForm.find('.form-results');
		contactForm.validate({
		  invalidHandler: function () { cf_results.slideUp(400); },
		  submitHandler: function(form) {
			cf_results.slideUp(400);
			$(form).ajaxSubmit({
			  target: cf_results, dataType: 'json',
			  success: function(data) {
				var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
				cf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
				if (data.result !== 'error') { $(form).clearForm(); }
			  }
			});
		  }
		});
	  }
	}


	$('.change-lang.en').on('click',function(e){
		e.preventDefault();
		let url = window.location.pathname;
    if (url === '/') {
      window.location.href = '/en/'
    }
		if (url === '/sobre-nosotros/nuestra-historia.html') {
			window.location.href = '/en/about-us/history.html'
		}
		if (url === '/sobre-nosotros/sociedades-estrategicas.html') {
			window.location.href = '/en/about-us/partners.html'
		}
		if (url === '/sobre-nosotros/clientes.html') {
			window.location.href = '/en/about-us/clients.html'
		}
		if (url === '/servicios/costa-afuera.html') {
			window.location.href = '/en/services/offshore-services.html'
		}
		if (url === '/servicios/cursos.html') {
			window.location.href = '/en/services/courses.html'
		}
		if (url === '/servicios/estudios-stps.html') {
			window.location.href = '/en/services/stps-studies.html'
		}
		if (url === '/servicios/proteccion-ambiental.html') {
			window.location.href = '/en/services/environmental-protection.html'
		}
		if (url === '/servicios/seguridad-industrial.html') {
			window.location.href = '/en/services/industrial-security.html'
		}
		if (url === '/servicios/otros-servicios.html') {
			window.location.href = '/en/services/other-services.html'
		}
		if (url === '/productos/iluminacion-led.html') {
			window.location.href = '/en/products/led-lighting.html'
		}
		if (url === '/productos/software-hse.html') {
			window.location.href = '/en/products/integrated-management-system.html'
		}
		if (url === '/contacto.html') {
			window.location.href = '/en/contact.html'
		}
		if (url === '/aviso-privacidad.html') {
			window.location.href = '/en/privacy-policy.html'
		}
	});

	$('.change-lang.es').on('click',function(e){
		e.preventDefault();
		let url = window.location.pathname;
		if (url === '/en/') {
			window.location.href = '/'
		}
		if (url === '/en/about-us/history.html') {
			window.location.href = '/sobre-nosotros/nuestra-historia.html'
		}
		if (url === '/en/about-us/partners.html') {
			window.location.href = '/sobre-nosotros/sociedades-estrategicas.html'
		}
		if (url === '/en/about-us/clients.html') {
			window.location.href = '/sobre-nosotros/clientes.html'
		}
		if (url === '/en/services/offshore-services.html') {
			window.location.href = '/servicios/costa-afuera.html'
		}
		if (url === '/en/services/courses.html') {
			window.location.href = '/servicios/cursos.html'
		}
		if (url === '/en/services/stps-studies.html') {
			window.location.href = '/servicios/estudios-stps.html'
		}
		if (url === '/en/services/environmental-protection.html') {
			window.location.href = '/servicios/proteccion-ambiental.html'
		}
		if (url === '/en/services/industrial-security.html') {
			window.location.href = '/servicios/seguridad-industrial.html'
		}
		if (url === '/en/services/other-services.html') {
			window.location.href = '/servicios/otros-servicios.html'
		}
		if (url === '/en/products/led-lighting.html') {
			window.location.href = '/productos/iluminacion-led.html'
		}
		if (url === '/en/products/integrated-management-system.html') {
			window.location.href = '/productos/software-hse.html'
		}
		if (url === '/en/contact.html') {
			window.location.href = '/contacto.html'
		}
		if (url === '/en/privacy-policy.html') {
			window.location.href = '/aviso-privacidad.html'
		}
	});
})(jQuery);
