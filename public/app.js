var app = angular.module('app', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                nav: {
                    templateUrl: '/public/header/header.html',
                    controller: 'NavController as Nav'
                },
                content: {
                    templateUrl: '/public/content/home.html',
                    controller: 'ContentController as Content'
                },
                footer: {
                    templateUrl: '/public/footer/footer.html',
                    controller: 'FooterController as Footer'
                }
            }
        });






}]);