angular.module('myApp.configuration', []).
    factory('config', function () {
        return {
            username: "angular",
            serchedUsername: "",
            message: "GitHub Viewer",
            repoSortOrder: "-stargazers_count",
            countdown: 5,
            cardsLimit: 45
        };
    }
);