// ROUTES
myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/register', {
        templateUrl: 'pages/register.htm',
        controller: 'registerController'
    })
    
});