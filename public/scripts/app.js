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
    console.log("checklist function whaat");
    $scope.todos = [
    { step: "Step 1", name: "Choose an IRA", id: 0, alias:"#zero", isChecked: false },
    { step: "Step 2", name: "Open the IRA", id: 1, alias:"#one", isChecked: false },
    { step: "Step 3", name: "Transfer money into your IRA account", id: 2, isChecked: false },
    { step: "Step 4", name: "Investment 101", id: 3, isChecked: false },
    { step: "Step 5", name: "Stocks and Bonds", id: 4, isChecked: false },
    { step: "Step 6", name: "ETF and MF", id: 5, isChecked: false },
    { step: "Step 7", name: "Strategy", id: 6, isChecked: false },
    { step: "Step 8", name: "Invest based on your strategy", id: 7, isChecked: false }
    ];
})


// .directive('checklist', ChecklistDirective);

//   function ChecklistDirective(){
//     var directive = {
      

//     };
//     return directive;
//   }


//Slideable Angular Directive

.directive('slideable', function () {
  console.log("slideable directive running");
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})

.directive('slideToggle', function() {
    console.log("slideToggle directive running");
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});






