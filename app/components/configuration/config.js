angular.module('myApp.configuration', []).
    factory('config', function () {
        return {
            username: "angular",
            message: "GitHub Viewer",
            repoSortOrder: "-stargazers_count",
            countdown: 5
        };
    }
);