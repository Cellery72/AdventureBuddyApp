  var myApp = angular.module('myApp', ["ui.router", "ui.bootstrap"])
  myApp.config(function ($stateProvider, $urlRouterProvider) {

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");
      $stateProvider
          .state('home', {
              url: '/',
              views: {
                  'content': {
                      templateUrl: 'content/home.html',
                      controller: "HomeController"
                  }
              }
          });
  });
  myApp.controller("HomeController",
      function ($scope, $uibModal) {
          $scope.animationsEnabled = true;
          $scope.open = function () {

              var modalInstance = $uibModal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'modal/modal.html',
                  controller: 'ModalController',
                  size: 'sm'
              });


          };
          $scope.toggleAnimation = function () {
              $scope.animationsEnabled = !$scope.animationsEnabled;
          };
      });
  myApp.controller("ModalController",
      function ($scope, $uibModal) {


          $scope.ok = function () {
              $uibModalInstance.close();
          };

          $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
          };

      });