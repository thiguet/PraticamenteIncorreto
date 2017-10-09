function showController ($scope) {
	$scope.html_show= "./assets/imgs/lugares/" + $scope.show;
	// console.log($scope.banda);
}

registerInAngular('showController', showController);



