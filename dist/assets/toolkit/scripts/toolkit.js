(function(){
var mainNav = function() {
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

	var open = false;
	if (button) {
		button.addEventListener('click', handler, false);
	}
	$('body').append('<div class="cn-button__overlay cn-button__overlay--closed"/>');
	function handler(){
	  if(!open){
			$(this).find('.cn-button__menu').hide();
	    $(this).find('.cn-button__menu--close').show();
	    $(wrapper).addClass('opened-nav');
			$('body').addClass('overlay-visible');
			$('.cn-button__overlay').removeClass('cn-button__overlay--closed');
	  }
	  else{
				$(this).find('.cn-button__menu').show();
		    $(this).find('.cn-button__menu--close').hide();
				$(wrapper).removeClass('opened-nav');
				$('body').removeClass('overlay-visible');
				$('.cn-button__overlay').addClass('cn-button__overlay--closed');
	  }
	  open = !open;
	}
	function closeWrapper(){
		$(wrapper).removeClass('opened-nav');
	}
}();

})();


$(function(){
  window.scrollTo(0,0);
	var loaderHandler = function(callback) {
		$('.loader-wrapper').css('opacity','0')
		setTimeout(function() { $('.loader-wrapper').remove()}, 1000);
	}


 if ($('#gallery').length) {
	 loaderHandler();

	 $('body').addClass('svg--faded');
		$("#gallery").vegas({
			preload: true,
			transitionDuration: 2000,
	 		delay: 10000,
	    slides: [
			        { src: "../assets/toolkit/images/gallery/slide1.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide2.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide3.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide4.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide5.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide6.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide7.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide8.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide9.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide10.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide11.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide12.jpg" },
							{ src: "../assets/toolkit/images/gallery/slide13.jpg" }
			    ]
			});
 }
	var options = {
		duration: 50,
		onReady: function(el) {
			$(el.parentEl.closest('.jumbotron__animation-wrapper')).addClass('gold-stroke');
			$(el.parentEl.closest('.jumbotron')).find('.jumbotron__background--wrapper').css('opacity','1');
			setTimeout(loaderHandler,200);
		}
	}
	var hideSVG = function(animation) {
		var jumbo = $(animation.parentEl).closest('.jumbotron');

		jumbo.find('.jumbotron__animation-wrapper').fadeOut(500, "easeOutCubic", function() {
			jumbo.addClass('svg--fade');
			$('body').addClass('svg--faded');
			jumbo.find('.jumbotron__pattern-gold').css('opacity', '0');
			jumbo.find('.rec-white').css('opacity','1');
		});

	}
  if ($('#svgEmperors').length>0) {
    var svgEmperors = new Vivus('svgEmperors',options, hideSVG);
  }
  if ($('#svgForbiddencity').length>0) {
    var svgForbiddencity = new Vivus('svgForbiddencity', {
				duration: 30,
				start: 'autostart',
				onReady: function(el) {
					$(el.parentEl.closest('.jumbotron__animation-wrapper')).addClass('gold-stroke');
					$(el.parentEl.closest('.jumbotron')).find('.jumbotron__background--wrapper').css('opacity','1');
					setTimeout(loaderHandler,200);
				}
		}, hideSVG);
  }
  if ($('#svgHistory').length>0) {
    var svgHistory = new Vivus('svgHistory', options, hideSVG);
  }
  if ($('#svgTraveltips').length>0) {
    var svgTraveltips = new Vivus('svgTraveltips', options, hideSVG);
  }
  if ($('#svgWhattosee').length>0) {
    var svgWhattosee = new Vivus('svgWhattosee', options, hideSVG);
  }




})
var scroll = $(window).scrollTop();
if (scroll >= $('.jumbotron__background--wrapper').height()) {
		$(".page__title.page__title--main").addClass("gold-text");
} else {
		$(".page__title.page__title--main").removeClass("gold-text");
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= $('.jumbotron__background--wrapper').height()) {
        $(".page__title.page__title--main").addClass("gold-text");
    } else {
        $(".page__title.page__title--main").removeClass("gold-text");
    }
});
