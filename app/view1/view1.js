'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', [
    '$scope', '$log',
    'github', 'config',
    function ($scope, $log, github, config) {
        $log.info("init View1Ctrl");
                
        var onRepos = function (data) {
            $scope.repos = data;
        }

        var onUserComplete = function (data) {
            $scope.user = data;

            //nach erfolgreichem call auf die userdaten
            //neuer call auf repos
            github.getRepos($scope.user).then(onRepos, onError);
        }
        var onError = function (reason) {
            console.log(reason);
            $scope.error = "Could not fetch data";
        }

        if (config.serchedUsername === "") {
            github.getUser("angular")
                .then(onUserComplete, onError);
        }
        else {
            github.getUser(config.serchedUsername)
                .then(onUserComplete, onError);
        }
        

        $scope.repoSortOrder = config.repoSortOrder;

        $scope.search = function (username) {
            $log.info("Searching for " + username);

            config.serchedUsername = username;

            github.getUser(username)
                .then(onUserComplete, onError);
        }

    }]);