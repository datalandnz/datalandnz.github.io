
$(document).ready(function(){


document.addEventListener('DOMContentLoaded', function(){
	var trigger = new ScrollTrigger();
});

var ValidEmail = false;
var ValidMessage = false;

//Vadil Email
$("#email")
		.focus(function(){
			if($(this).val().length === 0){
				$(this).parent().find('span.input-errors').empty();
				$(this).parent().find('span.input-errors').append("<ul class='error'></ul>");
				$(this).parent().find('span.input-errors ul').append(
						"<li class='required'>This is required</li>"+
						"<li class='email'>Must be a valid Email</li>"
						)
				}
		}).blur(function(){

		}).keyup(function(){
			if($(this).val().length !== 0 ){
				$(this).parent().find('span.input-errors .required').remove();
			} else if( ($(this).val().length === 0) && ( $("li.required").length === 0) ) {
				$(this).parent().find('span.input-errors ul').append("<li class='required'>This is required</li>");
			}
			var emailPattern = /[a-z0-9._-]+@[a-z0-9.-_]+\.[a-z]{2,4}/i;
			if($(this).val().match(emailPattern)){
				$(this).parent().find('span.input-errors .email').remove();
			} else if( (!$(this).val().match(emailPattern)) && ($("li.email").length === 0) ){
				$(this).parent().find('span.input-errors ul').append("<li class='email'>Must be a valid Email</li>")
			}
			if($(this).parent().find('span.input-errors ul li').length === 0){
				ValidEmail = true;
			}

	});


	//Validate Message
	$("#message")
		.focus(function(){
			if($(this).val().length === 0){
				$(this).parent().find('span.input-errors').empty();
				$(this).parent().find('span.input-errors').append("<ul class='error'></ul>");
				$(this).parent().find('span.input-errors ul').append(
						"<li class='required'>This is required</li>"
						)
				}
		}).blur(function(){

		}).keyup(function(){
			if($(this).val().length !== 0 ){
				$(this).parent().find('span.input-errors .required').remove();
			} else if( ($(this).val().length === 0) && ( $("li.required").length === 0) ) {
				$(this).parent().find('span.input-errors ul').append("<li class='required'>This is required</li>");
			}
			if($(this).parent().find('span.input-errors ul li').length === 0){
				ValidMessage = true;
			}
		});


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
