'use strict';

angular.module('myApp.cards', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cards', {
        templateUrl: 'cards/cards.html',
        controller: 'CardsCtrl'
    });
}])

.controller('CardsCtrl', [
    '$scope', '$log',
    'config', 'cardservice',
    function ($scope, $log, config, cardservice) {
        $log.info("init CardsCtrl");

        $scope.cardsLimit = config.cardsLimit;

        $scope.cards = null;
        var oncards = function (data) {
            $scope.cards = data;
        }

        var onError = function (reason) {
            console.log(reason);
            $scope.error = "Could not fetch data";
        }

        cardservice.getCards("Curse of Naxxramas")
            .then(oncards, onError);

    }]);