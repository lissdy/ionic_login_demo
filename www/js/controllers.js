angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/signup.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.sign_up_modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Open the sign up modal
        $scope.signUp = function () {
            $scope.modal.hide();
            $scope.sign_up_modal.show();
        };

        // Close the sign up modal
        $scope.closeSignup = function () {
            $scope.sign_up_modal.hide();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            //if the user is valid
            if ($scope.loginData.username == 'lissdy') {
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            }
        };
    })
