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
  'myApp.errSrc'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]).
run(function ($rootScope) {

    angular.element(document).ready(function () {
        
        

        console.log('Hello World');
        $(".animated")
            .mouseenter(function(evt){
                
                console.log("entering");
                $(this).find(".cards-tooltip").addClass("currentToolTip").clone().appendTo( "body" ).show();
            })
            //.mouseover(function (evt) {
                
            //    $("body").find(".currentToolTip").css({
            //        left: evt.pageX + 20,
            //        top: evt.pageY + 20
            //    })
            //})
            .mousemove(function (evt) {
                
                if ($(window).width() - evt.pageX < 240) {
                    $("body").find(".currentToolTip").css({
                        left: 'auto',
                        top: evt.pageY + 20,
                        right: $(window).width() - evt.pageX
                    })

                }
                else {
                    $("body").find(".currentToolTip").css({
                        left: evt.pageX + 20,
                        top: evt.pageY + 20
                    })
                }

                
            })
            .mouseleave(function (evt) {
                
                console.log("leaving");
                $("body").find(".currentToolTip:last").remove();
            })


          
        
        
        
        

    });
});

//run(['$routeProvider', '$rootScope', function ($rootScope, $routeProvider) {
//    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
//        //Change page title, based on Route information
//        $rootScope.title = $route.current.title;
//    });
//

