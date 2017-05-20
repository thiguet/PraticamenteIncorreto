// FILE: ./assets/js/RegisterInAngular.js
function RegisterInAngular(name, callback) {
	app.controller(name, callback);
}

// FILE: ./assets/js/angularInit.js
var app = angular.module("praticamenteIncorreto", []);

// FILE: ./assets/js/screenInit.js
function screenInit ($scope, $http) {
	var config;
	$(document).ready(function() {
		// Add smooth scrolling to all links in navbar + footer link
		$(" .menu-item a , .navbar a , footer a[href='#HOME']").on('click', function(event) {

		  	// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {

			    // Prevent default anchor click behavior
			    event.preventDefault();

			    // Store hash
			    var hash = this.hash;

			    // Using jQuery's animate() method to add smooth page scroll
			    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
			    $('html, body').animate({
			      scrollTop: $(hash).offset().top
			    }, 600, function(){

			      // Add hash (#) to URL when done scrolling (default click behavior)
			      window.location.hash = hash;
		      	});
		    } // End if 
		});
	});

	$http.get( './assets/json/bandaInfo.json').then(function(result) {
		config = result.data;
		$scope.menu = config.menu;
		$scope.welcome = config.welcome;
		$scope.banda = config.banda;
		$scope.shows = config.shows;
	});
}
RegisterInAngular('screenInit', screenInit);
