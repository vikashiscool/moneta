/*
* public/scripts/app.js
*/

// $(document).ready(function() {
//     $('.step').click(function(){
//         $(this).css('background', 'red');
//     console.log("document.ready to rock");
//     })
// });


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
        console.log("you deleted a thing");
    //     $http.delete('/api/todos/' + id)
    //         .success(function(data) {
    //             $scope.todos = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    };


})


.controller('checklistController', function ($scope, $http){

function checklist($scope) {
    console.log("checlist function whaat");
    $scope.todos = [
    { name: "Red", id: 0, isChecked: false },
    { name: "Blue", id: 1, isChecked: false },
    { name: "Green", id: 2, isChecked: false },
    { name: "Yellow", id: 3, isChecked: false },
    { name: "Orange", id: 4, isChecked: false },
    { name: "Purple", id: 5, isChecked: false }
    ];
  }
});

// .controller("checklist", function($scope){
//   console.log("Loading checklist controller");
//   $scope.class = "unchecked";
//   $scope.changeClass = function() {
//     if($scope.class === "unchecked") 
//       $scope.class = "checked";
//     else {
//       $scope.class = "unchecked";
//     } 
//   }
// });


// .directive('checklist', ChecklistDirective);

//   function ChecklistDirective(){
//     var directive = {
      

//     };
//     return directive;
//   }

