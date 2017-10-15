// FILE: ./assets/js/angularInit.js
var app = angular.module("praticamenteIncorreto", []);

// FILE: ./assets/js/controllers/bandController.js
function bandController ($scope) {
	console.log($scope.banda);
}

registerInAngular('bandController', bandController);

// FILE: ./assets/js/controllers/participantesController.js
function participantesController ($scope) {
	$scope.html_imagem= "assets/imgs/participantes/" + $scope.integrante.nome + ".jpg";
	// console.log($scope.banda);
}

registerInAngular('participantesController', participantesController);

// FILE: ./assets/js/controllers/showController.js
function showController ($scope) {
	$scope.html_show= "./assets/imgs/lugares/" + $scope.show;
	// console.log($scope.banda);
}

registerInAngular('showController', showController);





// FILE: ./assets/js/registerInAngular.js
function registerInAngular(name, callback) {
	app.controller(name, callback);
}

// FILE: ./assets/js/screenInit.js
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
				    	// window.location.hash = hash;
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

// FILE: ./assets/js/xmlHttpRequestService.js
function xmlHttpRequestService() {
	var backendUrl = '../backend/';

	this.post = function (data, callback, isJson, type) {	
		var isJson = isJson,
			jsonData = !!isJson ? JSON.stringify(data) : data,
			xmlHttp = new XMLHttpRequest();
		
		xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var response = JSON.parse(this.responseText);
		    	return callback(response);
		    }
		};

		// True if the url does not end with the following char (/)
		if( /[^\/]$/.test(backendUrl) ) 
			backendUrl += '/';
		
		xmlHttp.open("POST", backendUrl + 'index.php', true);
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		xmlHttp.send( jsonData );
	}
}
