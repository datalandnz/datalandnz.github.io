
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

	$(".day1Btn").click(function(){
		$(".day1Btn").css("background-color","#f1f1f1");
		$(".day2Btn").css("background-color","white");
		$(".day-1").css("display","block");
		$(".day-2").css("display","none");
	});

	$(".day2Btn").click(function(){
		$(".day2Btn").css("background-color","#f1f1f1");
		$(".day1Btn").css("background-color","white");
		$(".day-2").css("display","block");
		$(".day-1").css("display","none");

	});







































}); //End of jQuery
