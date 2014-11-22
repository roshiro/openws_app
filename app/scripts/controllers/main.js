'use strict';

/**
* @ngdoc function
* @name openwsAppApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the openwsAppApp
*/
angular.module('openwsAppApp')
.controller('MainCtrl', ['$http', '$location', '$log', function ($http, $location, $log,$scope) {
  this.usersUrl = 'https://openws.herokuapp.com/app.users';
  this.showSuccess = false;
  this.showError = false;
  this.user = {};
  var _this = this;

  this.goSignup = function() {
    $location.path("/signup");
  };

  this.goLogin = function() {
    $location.path("/login");
  };

  this.signup = function(user) {
    delete user['confirmPassword'];
    $log.debug(user);
    this.user = {};
    $http.post(this.usersUrl, user)
    .success(function() {
      _this.showSuccess = true;
      $log.debug("User saved successfuly");
    })
    .error(function() {
      _this.showError = true;
      $log.error("Use could not be saved.");
    });
  };

  this.validPassword = function(user) {
    return user.password === user.confirmPassword;
  };
}]);
