var app = angular.module('app', ['ui.router.state'])

.config(function ($stateProvider) {

    $stateProvider.state('about',{
        url: 'about',
        templateUrl: '/views/about.html'
    })
})

.directive('innerAbout', function () {
    return {
        templateUrl: 'api/js/views/about.html'
    }
})

.directive('innerProjects', function () {
    return {
        templateUrl: 'api/js/views/projects.html'
    }
})

.directive('innerExperience', function () {
    return {
        templateUrl: 'api/js/views/experience.html'
    }
})

.directive('innerContact', function () {
    return {
        templateUrl: 'api/js/views/contact.html'
    }
});

