var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('app', {
            abstract: true,
            url:'',
            views: {
                nav: {
                    templateUrl: 'public/header/header.html',
                    controller: 'NavController as Nav'
                },
                '': {
                    templateUrl: 'public/content/home.html',
                    controller: 'ContentController as Content'
                },
                footer: {
                    templateUrl: 'public/footer/footer.html',
                    controller: 'FooterController as Footer'
                }
            }
        })
        .state('app.home', {
            url: '/',
            controller: 'HomeController as Home'
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'public/content/login.html',
            controller: 'LoginController as Login'
        })
        .state('app.register', {
            url: '/register',
            templateUrl: 'public/content/register.html',
            controller: 'RegisterController as Register'
        });
}]);