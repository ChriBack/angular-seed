'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2/:username/:reponame', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', [
    '$scope', '$log',
    'github', 'config', '$routeParams',
    function ($scope, $log, github, config, $routeParams,page) {
        $log.info("init View2Ctrl");
        $scope.pageClass = 'page-home';       

        var onRepo = function (data) {
            $scope.repo = data;
        }

        var onError = function (reason) {
            $scope.error = reason;
        }


        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getSubscribers(username, reponame)
            .then(onRepo, onError);

}]);