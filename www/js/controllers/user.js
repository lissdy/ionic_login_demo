angular.module('loginCtrl', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout,$ionicPopup,$localstorage) {

        //-------------------------------------------SIGN UP----------------------------------
        $scope.signUpDate = {};

        $ionicModal.fromTemplateUrl('templates/signup.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.sign_up_modal = modal;
        });

        $scope.signUp = function () {
            $scope.signUpDate = {};
            $scope.modal.hide();
            $scope.sign_up_modal.show();
        };

        $scope.password_not_match = function() {
            $ionicPopup.alert({
                template: 'Please make sure password and confirm password are same values'
            });
        };

        $scope.closeSignup = function () {
            $scope.sign_up_modal.hide();
        };

        $scope.doSignUp = function () {
            console.log('Doing signup', $scope.signUpDate);
            if ($scope.signUpDate.password != $scope.signUpDate.confirm_password){
                $scope.password_not_match();
            }else{
                $localstorage.set($scope.signUpDate.username,$scope.signUpDate.password);
            }
            console.log($localstorage.get($scope.signUpDate.username));
        };


        //-------------------------------------------LOGIN----------------------------------
        $scope.loginData = {};

        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        $scope.login = function () {
            $scope.loginData = {};
            $scope.modal.show();
        };

        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);
            //if the user is valid
            if ($scope.loginData.password == $localstorage.get($scope.loginData.username)) {
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
    })
