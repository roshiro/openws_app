'use strict';

/**
 * @ngdoc function
 * @name openwsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openwsAppApp
 */
angular.module('openwsAppApp')
  .controller('MainCtrl', function ($scope) {
    this.selectedAction = 'home';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
