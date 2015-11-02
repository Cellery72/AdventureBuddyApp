var myApp = angular.module('myApp.module', ['ui.router']);

var port = 1337;
myApp = require('express');

myApp.use('/', function(req, res) {
    res.send('Howdy World');
});

myApp.listen(port);

console.log('Server running at http://localhost:' + port);
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');



    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    template: "client/header.html"
                },
                'content': {
                    templateUrl: 'client/content/home.html'
                },
                'footer': {
                    templateUrl: 'client/content/footer.html'
                }
            }
        })
        .state('home.dashboard', {
            url: '/dashboard',
            views: {
                'content': {
                    templateUrl: 'client/content/dashboard.html',
                    controller: 'DashboardController'
                }
            }

        })
        .state('home.login', {
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'client/content/login.html',
                    controller: 'LoginController'
                }
            }

        })
        .state('home.register', {
            url: '/register',
            views: {
                'content': {
                    templateUrl: 'client/content/register.html',
                    controller: 'RegisterController'
                }
            }

        });
});