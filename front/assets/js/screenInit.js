function screenInit ($scope, $http) {
	var BAND_JSON_PATH = './assets/json/bandInfo.json';
	var config;

	var openFile = function (str) {
		return $http.get(str);
	};

	openFile(BAND_JSON_PATH).then(function(result) {
		config = result.data;
		$scope.menu = config.menu;
		$scope.welcome = config.welcome;
		$scope.banda = config.banda;
		$scope.shows = config.shows;

		setSmoothScrolling();	
	});
	var setSmoothScrolling = function() { 
		return $(document).ready(function() {
			// Add smooth scrolling to all links in navbar + footer link
			$(".menu-item a, a[href='#HOME']").on('click', function(event) {

			  	// Make sure this.hash has a value before overriding default behavior
				if (this.hash !== "") {

				    // Prevent default anchor click behavior
				    event.preventDefault();

				    // Store hash
				    var hash = this.hash;

				    // Using jQuery's animate() method to add smooth page scroll
				    // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
				    $('html, body').animate({
				    	scrollTop: $(hash).offset().top
				    }, 900, function() {
				      // Add hash (#) to URL when done scrolling (default click behavior)
				    	window.location.hash = hash;
			      	});
			    } // End if 
			});

			$('#submitComment').on('click', function () {
				if(validate()) {
					var data = {
						'name' : $('#name')[0].value,
						'email': $('#email')[0].value,
						'comments': $('#comments')[0].value
					};
					
					var xhr = new xmlHttpRequestService () ;
					xhr.post(data, function() {}, true);
				}
			});
		});
	};

	var validate = function () {
		return !!($('#name')[0].value) && !!($('#email')[0].value) && !!($('#comments')[0].value);
	};
}

registerInAngular('screenInit', screenInit);