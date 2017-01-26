myApp.controller('RegistrationController', ['$scope', function($scope) {
  //$scope.message = "Welcome Home";

  $scope.login = function(){
  	$scope.message = "Welcome " + $scope.user.email + " " + $scope.user.password
  	//$scope.message = "Welcome K32 Students";

  };

  $scope.register = function() {
   $scope.message = "Welcome " + $scope.user.firstname + " " + $scope.user.lastname;
  };

}]);