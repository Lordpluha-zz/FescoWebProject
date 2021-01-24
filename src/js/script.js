jQuery(document).ready(function($) {

	$(".scroll_down").on("click", "a", function (event) {
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
	
});

