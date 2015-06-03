angular.module('myApp.taskservice', []).
    config(['$httpProvider', function ($httpProvider) {
        ////Enable cross domain calls
        //$httpProvider.defaults.useXDomain = true;

        ////Remove the header used to identify ajax call  that would prevent CORS from working
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]).


    factory('taskservice', function ($http) {

        var serviceUrl = "http://localhost:14727/api/todoapp/tasks/";

        var getSingleTask = function (taskId) {
            return $http.get(serviceUrl + taskId)
                .then(function (response) {
                    return response.data;
                });
        };
        var getAllTasks = function () {
            return $http({
                url: serviceUrl,
                method: "GET",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true
            })
                .then(function (response) {
                    return response.data;
                });
        };
        //var getAllTasks = function () {
        //    return $http.get(serviceUrl)
        //        .then(function (response) {
        //            return response.data;
        //        });
        //};

        var insertCreateTask = function (task) {
            return $http({
                url: serviceUrl,
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param(task)
            })
                .then(function (response) {
                    return response.data;
                });
        };

        var updateTask = function (task) {
            return $http.pu(serviceUrl, task)
                .then(function (response) {
                    return response.data;
                });
        };

        var deleteTask = function (task) {
            return $http.delete(serviceUrl, task)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getSingleTask: getSingleTask,
            getAllTasks: getAllTasks,
            insertCreateTask: insertCreateTask,
            updateTask: updateTask,
            deleteTask: deleteTask
        };

    }
);