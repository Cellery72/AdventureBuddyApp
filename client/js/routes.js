// ROUTES
myApp.config(['$routeProvider',
    function ('$routeProvider') {
        $routeProvider.
        when('/', {
            templateUrl: '/client/pages/home.html',
            controller: 'homeController'
        }).
        when('/login', {
            templateUrl: 'client/pages/login.html',
            controller: 'homeController'
        }).
        when('/register', {
            templateUrl: 'client/pages/register.html',
            controller: 'registerController'
        }).
        otherwise({
            redirectTo:'/'
        });
    }]);

});