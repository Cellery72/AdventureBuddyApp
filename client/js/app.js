var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'client/pages/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
            url:'/login',
            templateUrl:'client/pages/login.html'
        })
    
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('register', {
            url:'/register',
            templateUrl:'client/pages/register.html'
        });
        
});