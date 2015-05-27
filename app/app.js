'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.services',
  'myApp.configuration'
]).
config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
//}]).
//run(function ($rootScope, page) {
//    $rootScope.$on('$routeChangeSuccess', function (e) {
//        console.log(page);
//    })
//})
//run(['$routeProvider', '$rootScope', function ($rootScope, $routeProvider) {
//    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
//        //Change page title, based on Route information
//        $rootScope.title = $route.current.title;
//    });
    //
}]);
