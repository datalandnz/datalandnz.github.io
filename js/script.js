
$(document).ready(function(){


document.addEventListener('DOMContentLoaded', function(){
	var trigger = new ScrollTrigger();
});


//Hamburger Menu

		$("#hamburger-dropdown").click(function(){
		    $("#dropdown-list").toggle();
		});

		$("#menuToggle").click(function(){
			console.log("Working");
		    $("#menu").show();
		});

		$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}

	});

	$(function() {
	$("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
			if (target.length) {
				$("html,body").animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});
	});


	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//Build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.ux'
	})
	.setClassToggle('.ux', 'fade-in') //add class to UX icons
	.addTo(controller);

	//Build a scene
	var devScene = new ScrollMagic.Scene({
		triggerElement: '.dev-container'
	})
	.setClassToggle('.dev-container', 'fade-in') //add class to UX icons
	.addTo(controller);




}); //End of jQuery
