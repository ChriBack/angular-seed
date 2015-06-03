'use strict';

angular.module('myApp.viewtasks', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/viewtasks', {
        templateUrl: 'viewTasks/viewTasks.html',
        controller: 'viewTasksCtrl'
    });

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

.controller('viewTasksCtrl', [
    '$scope', '$log',
    'config', 'cardservice', 'taskservice',
    function ($scope, $log, config, cardservice, taskservice) {
    $log.info("init viewTasksCtrl");
    $scope.pageClass = 'page-viewTasksCtrl';
   

    var onRepo = function (data) {
        $scope.tasks = data;
    }

    var onError = function (reason) {
        $scope.error = reason;
    }

    taskservice.getAllTasks()
        .then(onRepo, onError);

    $scope.addTodo = function (formTodoText) {
        console.log(formTodoText);

        var task = {
            Name: formTodoText
        };

        taskservice.insertCreateTask(task)
        .then(onRepo, onError);


    };

}]);