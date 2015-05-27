angular.module('myApp.configuration', []).
    factory('config', function () {
        return {
            username: "angular",
            serchedUsername: "",
            message: "GitHub Viewer",
            repoSortOrder: "-stargazers_count",
            countdown: 5
        };
    }
);

//angular.module('myApp.pageConfig', []).
//    factory('page', function () {
//        var title = 'default';
//        return {
//            title: function () { return title; },
//            setTitle: function (newTitle) { title = newTitle; }
//        };
//    }
//);