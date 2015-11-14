var myApp = angular.module('myApp', ['ui.router', 'angularModalService', 'ui.bootstrap'])
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
myApp.controller('HomeController', function ($scope, $log, $uibModal) {

    $scope.animationsEnabled = true;
    $scope.showRegisterForm = function () {
        $('.loginBox').fadeOut('fast', function () {
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast', function () {
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        });
        $('.error').removeClass('alert alert-danger').html('');
    };
    $scope.showLoginForm = function () {
        $('#loginModal .registerBox').fadeOut('fast', function () {
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast', function () {
                $('.login-footer').fadeIn('fast');
            });

            $('.modal-title').html('Login with');
        });
        $('.error').removeClass('alert alert-danger').html('');

    }
    $scope.openLoginModal = function () {

        $scope.showLoginForm();
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/modal.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.openRegisterModal = function () {

        $scope.showRegisterForm();
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/modal.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});


myApp.controller('ModalInstanceCtrl', ['$uibModalInstance', function ($scope, $uibModalInstace, close) {


    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };


}]);