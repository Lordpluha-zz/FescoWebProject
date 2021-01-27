jQuery(document).ready(function($) {

	$('#header').scroll();

	$(".scroll_down").on("click", "a", function (event) {
	    event.preventDefault();

	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	        
	    $('body, html').animate({scrollTop: top}, 1100);
    });

    $("nav #content .nav__navbar .navbar__elems ul li").on("click", "a", function (event) {
	    event.preventDefault();

	    $('nav #content .nav__navbar .navbar__elems ul li a.active').removeClass('active');
	    $(this).addClass('active')

	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	        
	    $('body, html').animate({scrollTop: top}, 1100);
    });

    $("article .contact_info .addr .Reservation").on("click", "a", function (event) {
	    event.preventDefault();

	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	        
	    $('body, html').animate({scrollTop: top}, 1100);
    });


	$(document).bind("scroll.myScroll", function(){    
	    if ($(document).scrollTop() >= document.documentElement.clientHeight/100*85) {
	       	$('nav').addClass('update');
	    }
	    else {
	    	$('nav.update').removeClass('update');
	    }

	    if ($(document).scrollTop() >= (document.documentElement.clientHeight)/10) {
	    	$('header #content').css({
	       		'opacity': '0'
	       	});
	    }
	    else {
	    	$('header #content').css({
	       		'opacity': '1'
	       	});
	    }
	});

	$('.burger__navbar').click(function(event) {
		$('.nav__navbar').toggleClass('active');
		$('.burger__navbar').toggleClass('active');
		$('.nav__brand').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('nav #content .nav__navbar .navbar__elems ul li a').click(function(event) {
		if ( $('.nav__navbar').hasClass('active')   ||
			 $('burger__navbar').hasClass('active') ||
			 $('.nav__brand').hasClass('active')    ||
			 $('body').hasClass('lock') ) {
			
			$('.nav__navbar').toggleClass('active');
			$('.burger__navbar').toggleClass('active');
			$('.nav__brand').toggleClass('active');
			$('body').toggleClass('lock');
		}
	});

	// $(window).on('scroll', function(event) {
	// 	var wt = $(window).scrollTop();
	// 	var wh = $(window).height();
	// 	var elem = $('.beaut_load');  // тут пишем селектор для выбора коллекции элементов, позиции которых нужно отследить
		  
	// 	var et = null, eh = null;
	// 	 	et = elem.offset().top;  // тут уже получаем параметр от элемента
	// 	   	eh = elem.outerHeight(); // тут уже получаем параметр от элемента
				 
	// 	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
	// 	    console.log('Блок в области видимости');

	// 	} else {
	// 	    console.log('Блок скрыт');
	// 	}
	// });
	
	$(window).on('scroll', function(event) {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var elem = $('.point_blocks');  // тут пишем селектор для выбора коллекции элементов, позиции которых нужно отследить
		  
		var et = null, eh = null;
		 	et = elem.offset().top;  // тут уже получаем параметр от элемента
		   	eh = elem.outerHeight(); // тут уже получаем параметр от элемента
				 
		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		    var navbar_elem = $(this, ' a.index').attr('id'),
		    	nabar_but = $('nav #content .nav__navbar .navbar__elems ul li', navbar_elem);

		    $('nav #content .nav__navbar .navbar__elems ul li a.active').removeClass('active');

		   	nabar_but.addClass('active');


		   	console.log('В областе видимости');

		} else {
		    console.log('Блок скрыт');
		}
	});
});

