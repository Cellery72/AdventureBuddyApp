var myApp = angular.module('myApp', ["ui.router", "angularModalService", "ui.bootstrap"])
myApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: '/public/content/home.html',
                    controller: "HomeController"
                }
            }
        });
});
myApp.controller('HomeController', function ($scope, $uibModal, $log) {


    $scope.animationsEnabled = true;

    $scope.open = function () {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/modal.html',
            controller: 'ModalInstanceCtrl'
        });

    };
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

myApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});