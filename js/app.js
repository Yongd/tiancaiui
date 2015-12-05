(function($) {
	//foundation init
    $(document).foundation();
	//wow init
	new WOW().init();
	//background paralax
	paralax();

    //
	////nav fixed auto
	//$element_fixed = function() {
     //   var st = $(document).scrollTop();
     //   (st > 30)? $('.contain-to-grid').addClass('onscroll'): $('.contain-to-grid').removeClass('onscroll');
     //   (st > 80)? $('.project').addClass('fixed'): $('.project').removeClass('fixed');
    //
    //};
    //if( $(document).scrollTop()>30  ){
    	//	$('.contain-to-grid').addClass('onscroll');
    	//	$(window).bind("scroll", $element_fixed);
    	//}else{
     //  		$(window).bind("scroll", $element_fixed);
   	//}
    //
	////case isotope & tab active
    //
    //






	//fix
	var fix = {
		init : function(){
			var self = this;
			$(window).bind("scroll", self.onscroll);
		},
		onscroll : function(){
			( this.scrollY > 30 )? $('#header').addClass('onscroll'): $('#header').removeClass('onscroll');
			( $('#project').tc_doesExist() && this.scrollY > 80 )?  $('#project').addClass('fixed'): $('#project').removeClass('fixed');
		}
	};



	fix.init();










})(jQuery);


jQuery(document).ready(function($) {

	//preloader
	if ($('#tc_page_preloader').tc_doesExist()) {
		$(window).load(function() {
			boc_hide_page_preloader();
		});
	}
	if ($("#caseshow").tc_doesExist()) {
		$("#caseshow").isotope();
		$(window).smartresize(function () {
			setTimeout(function () {
				$("#caseshow").isotope();
			}, 400);
		});
		$("#filter li div").click(function () {
			var selector = $(this).attr("data-option-value");
			$("#caseshow").isotope({
				filter: selector
			});
			$("#filter li div").removeClass("current_portfolio_item");
			$(this).addClass("current_portfolio_item");
			return false;
		});
	}
	//case isotope transition
	if ($('.grid_holder.animated_items').tc_doesExist()) {
		$('.grid_holder.animated_items').each(function(i, e) {
			$(e).find('.portfolio_animator_class').each(function(i, e) {
				var delay = 250;
				$(e).trans(i * delay + 'ms', '-delay');
			});
		});
	}
	//employee
	if ($('.employee').tc_doesExist()) {
		var touch = isPc() ? 'mouseenter' : 'touchend' ;
		$('.employee').on(touch, function(event){
			if ($(this).hasClass('hover')) {
				$(this).removeClass('hover');
			} else {
				$('.employee').removeClass('hover');
				$(this).addClass('hover');
			}
		}).on('mouseleave' ,function(event){
			$('.employee').removeClass('hover');
		});
	}

	//SKILL BAR
	if ($('.progress').tc_doesExist()) {
		$('.progress').waypoint(function() {
			var b_width = $(this).find("strong").attr("data-to");
			$(this).find("span").animate({
				width: b_width + "%"
			}, 3000, "linear");
			$(this).find("strong").countTo();
		}, {
			offset: '85%',
			triggerOnce: true
		});
	}
	//PROJECT NUMBER
	if ($('#number').tc_doesExist()) {
		$('#number').waypoint(function () {
			$(this).find("h1").countTo();
		}, {
			offset: '100%',
			triggerOnce: true
		});
	}
	//BLOG CAROUSEL
	if ($("#blog").tc_doesExist()) {
		$("#blog").owlCarousel({
			'items':4,
			'margin':30,
			'nav':true,
			'navText':['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
			'dots':false,
			'navRewind': false,
			'responsive':{
				0:{
					items:1,
				},
				480:{
					items:1,
					margin:20,
				},
				768:{
					items:4
				}
			}
		});
	}
	//price table
	if ($("#price").tc_doesExist()) {
		$("#price").owlCarousel({
			'items':4,
			'margin':26
		});
	}
	//case-info picture popup
	if ($("a.mfp_popup").tc_doesExist()) {
		$("a.mfp_popup").magnificPopup({
			type: 'image',
			mainClass: 'case_popup_spin',
			removalDelay: 200,
			fixedContentPos: false,
		})
	}
	//single image gallery
	if ($(".mfp_gallery").tc_doesExist()) {
		$(".mfp_gallery").each(function () {
			$(this).magnificPopup({
				delegate: "a.mfp_popup_gal",
				type: 'image',
				gallery: {
					enabled: true
				},
				mainClass: 'case_popup_spin',
				removalDelay: 200,
				fixedContentPos: true
			});
		});
	}
});

jQuery(window).load(function() {
	jQuery(function($) {

	})

});
//element fixed
function fixed(e,t,c){
	( $(document).scrollTop()>t ) ? e.addClass(c) :'';
	jQuery(window).bind("scroll", function(){
		( this.scrollY > t ) ? e.addClass(c) : e.removeClass(c);
	});
}


//background paralax
function paralax() {
	var speed   = 2;
	jQuery('.fwb-paralax').each(function(){
		var $this = jQuery(this);

		if ($this.data('speed'))
			speed = $this.data('speed') * 4;

		function bgPosition() {
			var $thisY   = $this.offset().top,
					$windowY = jQuery(window).scrollTop();

			if ($thisY > $windowY)
				$this.css({ backgroundPosition: '50% '+ (($thisY - $windowY) / speed) + 'px'});
			else
				$this.css({ backgroundPosition: '50% '+ (-($windowY - $thisY) / speed) + 'px'});
		}

		bgPosition();
		jQuery(window).on('scroll', bgPosition);
	});
}
//preloader hide
function boc_hide_page_preloader() {
	jQuery('#tc_page_preloader').css('opacity', 0);
	setTimeout(function() {
		jQuery('#tc_page_preloader').hide();
	}, 500);
}
//isPc
function isPc()
{
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
	}
	return flag;
}

jQuery.fn.tc_doesExist = function() {
	return jQuery(this).length > 0;
};
jQuery.fn.trans = function() {
	var t = arguments[0],
			d = arguments[1] || '';
	if (t) {
		jQuery.each(this, function(i, e) {
			jQuery(['-webkit-', '-moz-', '-o-', '-ms-', '']).each(function(i, p) {
				jQuery(e).css(p + 'transition' + d, t);
			});
		});
	}
};
jQuery.fn.smartresize = function(t, e) {
	var i = function(t, e, i) {
		var n;
		return function() {
			function o() {
				i || t.apply(s, r), n = null
			}
			var s = this,
					r = arguments;
			n ? clearTimeout(n) : i && t.apply(s, r), n = setTimeout(o, e || 100)
		}
	};
	jQuery.fn[e] = function(t, n) {
		return t ? this.bind("scroll", i(t, n)) : this.trigger(e)
	}
};