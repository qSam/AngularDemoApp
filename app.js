// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.name = 'Qasim';

    $timeout(function(){
      $scope.name = 'Wait, you are not Q'  
    }, 3000);
}]);
