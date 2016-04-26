console.log("you're insane");
var app = angular.module('login', []);
  
	app.controller("loginController", ['$scope', function($scope) {
		$scope.sign = "Sign In";
		

		$scope.signup = function(){
			$scope.sign = "Sign Up";
			$("#sign").attr("action", "/signup");

			// var b = document.querySelector("#sign"); 

			// b.setAttribute("action", "/signup");
		};
	}]);