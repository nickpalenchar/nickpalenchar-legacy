var app = angular.module('app', ['ui.router.state'])

.config(function ($stateProvider) {

    $stateProvider.state('about',{
        url: 'about',
        templateUrl: '/views/about.html'
    })
})

.directive('about', function () {
    return {
        templateUrl: 'views/about.html'
    }
});