// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope,$log) {
    $scope.name = 'James';
    console.log('The scope is : ',$scope);
    console.log($log);
});
