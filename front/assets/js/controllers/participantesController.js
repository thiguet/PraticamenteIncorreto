function participantesController ($scope) {
	$scope.html_imagem= "assets/imgs/participantes/" + $scope.integrante.nome + ".jpg";
	// console.log($scope.banda);
}

registerInAngular('participantesController', participantesController);