// CONTROLLERS
myApp.controller('homeController', ['$scope', 'mainService', function($scope, mainService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

myApp.controller('loginController', ['$scope', '$resource', '$routeParams', 'mainService', function($scope, $resource, $routeParams, mainService) {
    
   
   
    
}]);

myApp.controller('registerController', ['$scope', '$resource', '$routeParams', 'mainService', function($scope, $resource, $routeParams, mainService) {
    
 
    
}]);