// Prices for calculating petrol costs for wach vehicle
var motorbikePrice = 109;
var smallCarPrice = 129;
var largeCarPrice = 144;
var motorHomePrice = 200;

var petrolPrice = 1.859;
var transportType = 0;

var letersPer100;
var distanceNumber;
var pertrolMath;
var totalCost;

var noErrors = false;

var numberOfPeople = parseInt($("#numberOfPeople").val());
var numberOfDays = parseInt($("#numberOfDays").val());

var daysValidInput = false;
var peopleValidInput = false;


var daysVal = ($("#numberOfDays"));
var peopleVal = ($("#numberOfPeople"));


// Google maps

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeControl: false,
        center: {lat: -41.2897721,
 				 lng: 174.7731366},
        zoom: 6,
        scrollwheel: false,
        });

        new AutocompleteDirectionsHandler(map);
      }

      function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'DRIVING';
        var originInput = document.getElementById('origin-input');
        var destinationInput = document.getElementById('destination-input');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput, {placeIdOnly: true});

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

      
      } 

      AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
          if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
          } else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };

      AutocompleteDirectionsHandler.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;

        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
            DistanceDisplay(response.routes[0].legs[0].distance.text, response.routes[0].legs[0].duration.text, response.routes[0].legs[0].end_address);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
          
      };

//Function that gets the information for distance duration and end adress from google maps and displays in onto the html page

function DistanceDisplay(distance,duration,end_address){
    var Details = $("#Details").val();
    $("#route-distance").empty().prepend("<div><h4>"+distance+"</h4></div>");
    $("#route-duration").empty().prepend("<div><h4> about "+duration+"</h4></div>");
    distanceNumber = parseFloat(distance.replace(",", ""));
};





//Jquery

$(document).ready(function(){

	//smooth scrolling function
	$(function() {
	  $("a[href*=#]:not([href=#])").click(function() {
	    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
	      if (target.length) {
	        $("html,body").animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	
    // Validation for the number of people input

    $("#numberOfPeople").keyup(function(){

        numberOfPeople = parseInt($("#numberOfPeople").val());
     
        var numberOfPeopleErrors = $("#numberOfPeople").parent().find('span.input-errors');
        numberOfPeopleErrors.empty();

        if($(this).val().length === 0){
           numberOfPeopleErrors.text("This field is required").removeClass("success").addClass("error");
           noErrors = false;
           peopleValidInput = false;
           return;
        }else if( (peopleVal.val() >6) || (peopleVal.val() <1) ) {
           numberOfPeopleErrors.text("Must be between 1 and 6").removeClass("success").addClass("error");
           noErrors = false;
           peopleValidInput = false;


        }else{
           noErrors = true;
           peopleValidInput = true;
        }
    });

    // Validation for the number of days input

    $("#numberOfDays").keyup(function(){

        numberOfDays = parseInt(($("#numberOfDays").val()));
        var numberOfDaysErrors = $("#numberOfDays").parent().find('span.input-errors');
        numberOfDaysErrors.empty();
        
        if($(this).val().length === 0){
            numberOfDaysErrors.text("This field is required").removeClass("success").addClass("error");
            daysValidInput = false;
            return;
        }else if( (daysVal.val() >15) || (daysVal.val() <1) ) {
            numberOfDaysErrors.text("Must be between 1 and 15").removeClass("success").addClass("error");
            noErrors = false;
            daysValidInput = false;
        }else{
            noErrors = true;
            daysValidInput = true;
        }
    });



    // Validation to make it so you cannot click the calculate button unless there are no errors on the people input and the days input

    $("#numberOfDays, #numberOfPeople").keyup(function(){
  
      	if ((daysValidInput === true) &&  (peopleValidInput === true) ) {

		$("#button-blocker").hide();
    $(".button-error").hide();
    }else{
        $("#button-blocker").show();
    }

   

    // if statments showing and hiding the list of vehicles, depending on what numbers are input for number of days and number of people

    numberOfPeople = parseInt($("#numberOfPeople").val());
    numberOfDays = parseInt($("#numberOfDays").val());

    if( (numberOfPeople <= 1) && (numberOfPeople > 0) && (numberOfDays <= 5) && (numberOfDays >= 1)){
        $("#motorbike").show();
    }else{
        $("#motorbike").hide();
    }

    if((numberOfPeople <= 2) && (numberOfPeople >= 1) && (numberOfDays <= 10) && (numberOfDays >= 1)){
        $("#small-car").show();
    }else{
        $("#small-car").hide();
    }

    if((numberOfPeople <= 5) && (numberOfPeople >= 1) && (numberOfDays <= 10) && (numberOfDays >= 3)){
        $("#large-car").show();

    }else{
        $("#large-car").hide();
    }

    if((numberOfPeople <= 6) && (numberOfPeople >= 2) && (numberOfDays <= 15) && (numberOfDays >= 2)){
        $("#motor-home").show();
    }else{
        $("#motor-home").hide();
    }

    });


    // Changes the dropdown menu so you know what you just cliked on

    $("#motorbike").click(function(){
        $("#dropdown").text("Motorbike");
    });

    $("#small-car").click(function(){
        $("#dropdown").text("Small Car");
    });

    $("#large-car").click(function(){
        $("#dropdown").text("Large Car");
    });

    $("#motor-home").click(function(){
        $("#dropdown").text("Motor Home");
    });


    // Changing the varible for the type of transport and the fuel leters per 100km to get the right calculation depending what inputs were chosen

    $("#motorbike").click(function(){
      transportType = motorbikePrice;
      letersPer100 = 3.7
      $("#hire-type").empty().prepend("<div><h4>"+"Motorbike"+"</h4></div>");
    });

    $("#small-car").click(function(){
      transportType = smallCarPrice;
      letersPer100 = 8.5;
      $("#hire-type").empty().prepend("<div><h4>"+"Small Car"+"</h4></div>");
    });

    $("#large-car").click(function(){
      transportType = largeCarPrice;
      letersPer100 = 9.7;
      $("#hire-type").empty().prepend("<div><h4>"+"Large Car"+"</h4></div>");
    });

    $("#motor-home").click(function(){
      transportType = motorHomePrice;
      letersPer100 = 17;
      $("#hire-type").empty().prepend("<div><h4>"+"Motor Home"+"</h4></div>");
    });

    $("#calculate").click(function(){
        if (noErrors == true) {
            var people = parseInt($("#numberOfPeople").val());
            var howManyDays = parseInt($("#numberOfDays").val());
            // console.log(howManyDays * transportType);
            var totalHireCost = (howManyDays * transportType);
            // console.log("working");
            // console.log(distanceNumber);
            // console.log(totalHireCost);
            $("#hire-cost").empty().prepend("<div><h4>"+"$"+totalHireCost+"</h4></div>");
            pertrolMath = (distanceNumber  * letersPer100 / 100 * petrolPrice);
            console.log(pertrolMath);
            totalCost = (pertrolMath + totalHireCost);
            $("#petrol-cost").empty().prepend("<div><h4>"+"$"+pertrolMath.toPrecision(5)+"</h4></div>"); 
            $("#total-cost").empty().prepend("<div><h4 class='circle'>"+"$"+totalCost.toFixed()+"</h4></div>");
            }else{
                $("button-blocker").hide();
            }
    });


 	// Making an error pop up if you try click the calculate button without inputting any information

    $("#button-blocker").click(function(){
        $(".button-error").show();
    });

});


google.maps.event.addDomListener(window, "load", initMap);

