// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    $scope.name = 'James';
    console.log('The scope is : ',$scope);
}]);
