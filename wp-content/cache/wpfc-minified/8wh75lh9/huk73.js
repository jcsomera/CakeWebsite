// source --> http://www.formationstone.com/wp-content/themes/Ignyte/includes/main-scripts.js?ver=5.9 
jQuery(document).ready(function($) {
	//mm-menu options
  	$(function() {
		$('nav#menu').mmenu({
			classes: "mm-zoom-menu",
			searchfield: false,
			offCanvas: {
					position: "top",
					zposition : "front"
				}
			});
	});
	//smooth scrolling for down and up arrows
	$('#scroll-down-arrow, #scroll-top').on('click', function(event) {
		var target = jQuery(this).attr('href')
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({scrollTop: jQuery(target).offset().top}, 700);
		}
	});	
	
	//smooth scrolling for contact links
	$('.contactlead a').on('click', function(event) {
		var target = jQuery(this).attr('href')
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({scrollTop: jQuery(target).offset().top+75}, 700);
		}
	});	

	if ($('.menu-item').hasClass('telephone')) {
		$(this).find('a').addClass('number');
	}
	
	$("#closemm").click(function() {
	 	$("nav#menu").trigger("close.mm");
	});
	
	//singledrawer
	$('.singledrawer').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.drawer').removeClass('active');
			$('.singledrawer').removeClass('active');
			$('.drawer').css('max-height','0');
		
		//$( this ).addClass( 'active' );
		//$(this).addClass('active');
		} else {
			$( this ).parent().find( '.singledrawer.active' ).removeClass( 'active' );
			$( '.drawer' ).css('max-height','0');
			$(this).addClass('active');
			$('.drawer').addClass('active');
			$('.drawer').css({'max-height': 600});
		}
		var target = jQuery(this).attr('scrollto')
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: jQuery(target).offset().top+75
			}, 1000);
		}
	});	
});



// Make banners & Sliders fill viewport
jQuery(document).ready(function($) {
	if ($(window).width() > 767) {
		$('.banner-image').css({'height': (($(window).height()) ) + 75 + 'px'});
		$('#cs-first-section, #cs-second-section, #brand-identity').css({'min-height': (($(window).height()) ) + 1 + 'px'});
		$('.banner-image.img-frame, li.slide-img').css({'height': (($(window).height()) ) - 30 + 'px'});
	}
	else {
		$('.banner-image, #cs-first-section, #cs-second-section, #brand-identity').css({'min-height': (($(window).height()) ) + 60 + 'px'}).css('height', 'auto');
	}
});
jQuery(function($){
	$(window).resize(function(){
		if ($(window).width() > 767) {
			$('.banner-image').css({'height': (($(window).height()) ) + 75 + 'px'});
			$('#cs-first-section, #cs-second-section, #brand-identity').css({'min-height': (($(window).height()) ) + 1 + 'px'});
			//$('.banner-image.img-frame, li.slide-img').css({'height': (($(window).height()) ) - 30 + 'px'});
			$('.banner-image.img-frame').css({'height': (($(window).height()) ) - 30 + 'px'});
		}
		else {
			$('.banner-image, #cs-first-section, #cs-second-section, #brand-identity').css({'min-height': (($(window).height()) ) + 60 + 'px'}).css('height', 'auto');
		}
	});
});


// Navigation for Ignyte_Subnav

jQuery(document).ready(function($) {
	$('body').scrollspy({ target: '#page-subnav', offset: 600 })
	var navItems=$('.Ignyte_subNavItem');
	if (navItems.length>0) {
		navItems.each(function(index) {
			console.log("Item: "+index );
			//Title
			title=$( this ).find(".subnavtitle").text();
			console.log("Title:"+ $( this ).find(".subnavtitle").text());
			//ID
			id=$( this ).attr('id');
            console.log("ID:"+ $( this ).attr('id'));
			// put in subnav-menu, as li elements
			
			//$("#subnav-menu").append("<li><a href='#"+id+"'>"+title+"</a></li>");
			//$("#subnav-menu").append("<li><a scrollto='#"+id+"' data-target='#"+id+"' >"+title+"</a></li>");
        });
	}else{
		jQuery("#subnav-wrap").remove();	
	}
	
	jQuery('#subnav-menu a[scrollto]').on('click', function(event) {
		var target = jQuery(this).attr('scrollto')
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: jQuery(target).offset().top
			}, 1000);
		}
	});
	// Added scrollto for mmenu
	
	jQuery('#menu a[href]').on('click', function(event) {
		if ($(this).parent().hasClass('telephone')) {}else{
		var target = jQuery(this).attr('href');
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: jQuery(target).offset().top+75
			}, 1000);
		}}
	});
	
	// Added scrollto for mmenu
	if ($('body').hasClass('page-products')) {}else{
	jQuery('#header-all a[href]').on('click', function(event) {
		if ($(this).parent().hasClass('telephone')) {}else{
		var target = jQuery(this).attr('href');
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: jQuery(target).offset().top
			}, 1000);
		}}
	});
	}
});
// End Navigation for Ignyte_Subnav

//isInViewport code for header, nav, subnav, and responsive phone scrolls
var eventFired = 0;
(function($) {
  	$(document).ready(function() {
    	$(window).scroll(function() {
			
			// Sub-nav
		    $('#main-content:in-viewport(100)').do(function(){
			  	$('#subnav-wrap').addClass("showme");
		    });
		    $('.banner-image:in-viewport(200)').do(function(){
			  	$('#subnav-wrap').removeClass("showme");
		    });
		    $('#more-work:in-viewport(500)').do(function(){
			  	$('#subnav-wrap').removeClass("showme");
		    });
		    $('footer:in-viewport()').do(function(){
			  	$('#subnav-wrap').removeClass("showme");
		    });
			
			$('#themap:in-viewport(200)').do(function(){
			  	$('#themap').addClass("showmemap");
		    });
			
			$('#themap:in-viewport(50)').do(function(){
			  	$('#themap').addClass("showmedots");
		    });
			
			// Responsive phone scroll divs
		    $('#responsive:in-viewport(100)').do(function(){
			  	if (!eventFired) {
				  	$('.responsive-phone-inner').addClass('inview').delay(5000).queue(function(){
						$(this).removeClass("inview");
						$(this).dequeue();
				  	});
				  	eventFired = 1;
			  	}
			  	else {
				  	if (eventFired) {}
			  	}
		    });
		    if (!$('#responsive:in-viewport').length) {
			  	$('.responsive-phone-inner').removeClass('inview');
			  	eventFired = 0;
		    }
		});
    });
}(jQuery));


/*
// BS Affix for sidebars
jQuery(document).ready(function($) {
  if ($(window).width() > 767) {
	  $('#sidebar').affix({
		offset: {
		  top: function () {
			return (this.top = $('header').outerHeight(true) + $('.banner-image').outerHeight(true) - (123))
		  },
		  bottom: function () {
			return (this.bottom = $('footer').outerHeight(true) + $('#bottom-content').outerHeight(true) + (123))
		  }
		}
	  });
  }
  else {}
});*/

/* Check if we are in safari */
jQuery(document).ready(function($) {
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		var stickywidget = $('#sidebar');
		var explicitlySetAffixPosition = function() {
			stickywidget.css('left',stickywidget.offset().left+'px');
		};
		/* Before the element becomes affixed, add left CSS that is equal to the distance of the element from the left of the screen */
		stickywidget.on('affix.bs.affix',function(){
			explicitlySetAffixPosition();
		});
		
		$(window).scroll(function(){ 
			if(stickywidget.hasClass("affix-bottom")){
				stickywidget.css('left','auto');
			}else if (stickywidget.hasClass("affix-top")){
				
			}else{
				stickywidget.css('left',stickywidget.offset().left+'px');	
			}
		});
		/* On resize of window, un-affix affixed widget to measure where it should be located, set the left CSS accordingly, re-affix it */
		$(window).resize(function(){
			if(stickywidget.hasClass('affix')) {
				stickywidget.removeClass('affix');
				explicitlySetAffixPosition();
				stickywidget.addClass('affix');
			}
		});
	}
});



//PNG fallback for SVG:
function supportsSVG() {
  return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}

jQuery(document).ready(function($) {
	if (!supportsSVG()) {
	  var imgs = document.getElementsByTagName('img');
	  var dotSVG = /.*\.svg$/;
	  for (var i = 0; i != imgs.length; ++i) {
		if(imgs[i].src.match(dotSVG)) {
		  imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
		}
	  }
	}
	
	
	
});


//Tabbed area in front page

jQuery(function() {
    jQuery( "#tabs" ).tabs();
  });
jQuery(function() {
    jQuery( "#tabsc" ).tabs();
  });