angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout,$ionicPopup) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.signUpDate = {};

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
            $scope.loginData = {};
            $scope.modal.show();
        };

        // Open the sign up modal
        $scope.signUp = function () {
            $scope.signUpDate = {};
            $scope.modal.hide();
            $scope.sign_up_modal.show();
        };

        $scope.password_not_match = function() {
            var alertPopup = $ionicPopup.alert({
                template: 'Please make sure password and confirm password are same values'
            });
            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
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
                $scope.valid_user = false;
                $timeout(function () {
                    $scope.closeLogin();
                }, 500);
            }else{
                $scope.valid_user = true;
                $timeout(function () {
                    $scope.valid_user = false;
                }, 3000);
            }
        };

        $scope.doSignUp = function () {
            console.log('Doing signup', $scope.signUpDate);
            if ($scope.signUpDate.password != $scope.signUpDate.confirm_password){
                $scope.password_not_match();
            }
        }
    })
