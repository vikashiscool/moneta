console.log("you're insane");
var app = angular.module('login', []);
  
	app.controller("loginController", ['$scope', function($scope) {
		$scope.sign = "Log In";
		$scope.account = "Need an Account?";
		$scope.login = true;

		$scope.signup = function(){
			
			$scope.signUpButton = function () {
				$scope.login = !$scope.login;
			};

			if ($scope.login === true) {
				$scope.sign = "Sign Up";
				$("#sign").attr("action", "/signup");
				$scope.account = "Already have an account?";
				$scope.login = false;
			} else if ($scope.login === false) {
				$scope.sign = "Log In";
				$("#sign").attr("action", "/login");
				$scope.account = "Need an Account?";
				$scope.login = true;
			}
		};
	}]);