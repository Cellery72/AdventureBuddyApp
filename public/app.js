var myApp = angular.module('myApp', ['ui.router', 'angularModalService', 'ui.bootstrap'])
myApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'nav': {
                    templateUrl: '/public/nav/nav.html',
                    controller: "NavController"
                },
                'content': {
                    templateUrl: '/public/content/home.html',
                    controller: "HomeController",
                    views: {
                        'promo': {
                            templateUrl: '/public/content/promo.html'
                        }
                    }
                }
            }
        })
        .state('signup', {
            url: '/signup',
            views: {
                'nav': {
                    templateUrl: '/public/content/nav.html',
                    controller: "NavController"
                },
                'content': {
                    templateUrl: '/public/content/signup.html',
                    controller: "SignUpController"
                }
            }

        });
});

myApp.controller('HomeController', function ($scope, $log, $uibModal) {

    $scope.animationsEnabled = true;


    $scope.openLoginModal = function () {



        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/myModal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm'
        });
        modalInstance.result.then(function () {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.openRegisterModal = function () {


        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/myModal.html',
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

    function showRegisterForm() {
        $('.loginBox').fadeOut('fast', function () {
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast', function () {
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        });
        $('.error').removeClass('alert alert-danger').html('');

    };
});
myApp.controller('NavController', function ($scope, $log, $uibModal) {

    $scope.animationsEnabled = true;


    $scope.openLoginModal = function () {



        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/myModal.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm'
        });
        modalInstance.result.then(function () {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.openRegisterModal = function () {


        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal/myModal.html',
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

    function showRegisterForm() {
        $('.loginBox').fadeOut('fast', function () {
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast', function () {
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        });
        $('.error').removeClass('alert alert-danger').html('');

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