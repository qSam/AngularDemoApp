// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$log', function (a,b) {
    a.name = 'James';
    console.log('The scope is : ',a);
    console.log(b);
}]);
