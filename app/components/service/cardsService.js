angular.module('myApp.cardservice', []).
    factory('cardservice', function ($http, $q) {

        var jsonFilePath = '/assets/js/AllSets.deDE.json';

        var getCards = function (set) {
            return $http.get(jsonFilePath)
                .then(function (response) {
                    return response.data[set];
                });
        }

        return {
            getCards: getCards
        };

    }
);