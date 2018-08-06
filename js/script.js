
$(document).ready(function(){

	var buttonOne = true;
	var buttonTwo = false;


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

		if ($(window).width() <=992) {
			$(".day-2").css("display","none");
			$(".day-1").css("display","none");
			buttonOne = true;
			buttonTwo = false;
			console.log("less than 992px working");
		}else{
		$(".day-1").css("display","block");
		$(".day-2").css("display","none");
		}
		$(".day1Btn").css("background-color","#f7605f");
		$(".day1Btn").css("color","white");
		$(".day2Btn").css("background-color","white");
		$(".day2Btn").css("color","black");
	});

	$(".day2Btn").click(function(){
		if ($(window).width() <=992) {
			$(".day-2").css("display","none");
			$(".day-1").css("display","none");
			buttonTwo = true;
			buttonOne = false;
			console.log("less than 992px working");
		}else{
			$(".day-2").css("display","block");
			$(".day-1").css("display","none");

		}

		$(".day2Btn").css("background-color","#f7605f");
		$(".day2Btn").css("color","white");
		$(".day1Btn").css("background-color","white");
		$(".day1Btn").css("color","black");

	});

//Makes sure when re-sizing the window the day the user clicked on will show

	$(window).resize(function(){
		if ($(window).width() >=977) {
			if (buttonOne = true) {
				$(".day-1").css("display","block");
				$(".day-2").css("display","none");
			}




			if (buttonTwo = true) {
				$(".day-2").css("display","block");
				$(".day-1").css("display","none");
			}
		}

		console.log(buttonTwo);
	});




	if ($(window).width() <=992 && $(window).width() >=700) {
		$(".day-2").css("display","none");
		$(".day-1").css("display","none");
		$(".day-1-415").css("display","none");
		console.log("Between 992px and 700px");

	}

	if ($(window).width() <=699 && $(window).width() >=416) {
		$(".day-2-700").css("display","block");
		$(".day-1-700").css("display","block");
		console.log("Between 699px and 416px");

	}

	if ($(window).width() <=415) {
		$(".day-2-700").css("display","none");
		$(".day-1-700").css("display","none");
		$(".day-1-415").css("display","block");

	}

































}); //End of jQuery
