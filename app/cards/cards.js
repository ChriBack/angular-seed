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


        $scope.CardSets = {
            "type": "select",
            "name": "CardSets",
            "value": "Basic",
            "values": {
                'Basic': 'Basic',
                'Blackrock Mountain': 'Blackrock Mountain',
                'Classic': 'Classic',
                'Credits': 'Credits',
                'Curse of Naxxramas': 'Curse of Naxxramas',
                'Goblins vs Gnomes': 'Goblins vs Gnomes',
                'Missions': 'Missions'
            }
        };       

        $scope.cardsLimit = config.cardsLimit;

        $scope.cards = null;
        var oncards = function (data) {
            $scope.cards = data;
            setTimeout(initToolTip, 2000);
        }

        var onError = function (reason) {
            console.log(reason);
            $scope.error = "Could not fetch data";
        }

        cardservice.getCards($scope.CardSets.values['Basic'])
            .then(oncards, onError);

        $scope.selectSet = function (setName) {
            $log.info("Searching for " + setName);

            cardservice.getCards(setName)
            .then(oncards, onError);
        }

        $scope.changeSet = function () {
            $log.info("Searching for " + $scope.CardSets.value);

            if ($scope.CardSets.value != "" && $scope.CardSets.value != null) {
                cardservice.getCards($scope.CardSets.value)
                .then(oncards, onError);
            }
        }

        $scope.flipThis = function (event) {
            if ($(event.currentTarget).find('.card').hasClass('flipped')) {
                $(event.currentTarget).find('.card').removeClass('flipped');
            }
            else {
                $(event.currentTarget).find('.card').addClass('flipped');
            }
            $(".card").not($(event.currentTarget).find('.card')).removeClass('flipped');
        }
    }]);