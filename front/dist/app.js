// FILE: ./assets/js/RegisterInAngular.js
function RegisterInAngular(name, callback) {
	app.controller(name, callback);
}

// FILE: ./assets/js/angularInit.js
var app = angular.module("praticamenteIncorreto", []);

// FILE: ./assets/js/controllers/cabecalhoController.js
function cabecalhoController() {
	
	
}

RegisterInAngular('cabecalhoController', cabecalhoController);
