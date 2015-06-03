'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.services',
  'myApp.cardservice',
  'myApp.configuration',
  'myApp.cards',
  'myApp.errSrc',
  'myApp.viewtasks',
  'myApp.taskservice'
]).
config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.otherwise({ redirectTo: '/view1' });
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]).
run(function ($rootScope) {

    angular.element(document).ready(function () {
        
        

        console.log('Hello World, app is ready');
        
        initToolTip();

          
        
        
        
        

    });
});

//run(['$routeProvider', '$rootScope', function ($rootScope, $routeProvider) {
//    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
//        //Change page title, based on Route information
//        $rootScope.title = $route.current.title;
//    });
//

