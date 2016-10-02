// MODULE
var angularApp = angular.module('angularApp', []);

//Setup Angular Router
angularApp.config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateURL: 'pages/main.html',
        controller: 'mainController'
      })

      .when('/second',{
        templateURL: 'pages/second.html',
        controller: 'secondController'
      })
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', '$filter', function ($scope, $timeout, $filter) {
    $scope.name = 'Q, lets do this';

    $timeout(function(){
      $scope.name = 'Wait, you are not Q !'
    }, 3000);

    $scope.handle = '';
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
      {rulename: "Must be 5 characters"},
      {rulename: "Must not be used elsewhere"},
      {rulename: "Must be cool"}
    ]

    $scope.alertClick = function() {
      alert('Clicked');

    //Make API Call
    // $http.get('/api')
    }
}]);

//Second controller
angularApp.controller('secondController', ['$scope',function ($scope){
  $scope.secondName = 'Chewy';
}
]);
