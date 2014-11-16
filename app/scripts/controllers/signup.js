'use strict';

/**
 * @ngdoc function
 * @name openwsAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the openwsAppApp
 */
angular.module('openwsAppApp')
  .controller('SignupCtrl', ['$http', '$log', function ($http,$log,$scope) {
    this.selectedAction = 'signup';
    this.usersUrl = 'https://openws.herokuapp.com/app.users';
    this.users = [];
    this.user = {};
    var _this = this;

    $http.get(this.usersUrl).success(function(data) {
      _this.users = data;
    });

    this.signup = function(user) {
      delete user['confirmPassword'];
      $log.debug(user);
      this.users.push(user);
      this.user = {};
      $http.post(this.usersUrl, user)
        .success(function() {
          $log.debug("User saved successfuly");
        })
        .error(function() {
          $log.error("Use could not be saved.");
        });
    };

    this.validPassword = function(user) {
      return user.password === user.confirmPassword;
    };
  }]);
