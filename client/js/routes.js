myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "client/pages/home.html",
      controller: "client/js/controllers.js"
    })
    .state('login', {
      url: "/login",
      templateUrl: "client/pages/login.html",
      controller: "client/js/controllers.js"
    })
    .state('register', {
      url: "/register",
      templateUrl: "client/pages/register.html"
    });
});