/*
* public/scripts/app.js
*/
var moneta = angular.module('moneta', ['ui.router'])
  .controller('mainController', function ($scope, $http) {
    $scope.formData = {};
    console.log("app.js is loaded");
    // When landing on the page, GET ALL todos and show them
    $http.get('/api/todos')
        .success(function(data) {
          //On success, get api/todos and bind JSON we receive from $scope.todos
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // When submitting the add form, send the text to the node API (CREATE)
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // Clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // DELETE a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});