'use strict';

/**
* @ngdoc function
* @name openwsAppApp.controller:SignupCtrl
* @description
* # SignupCtrl
* Controller of the openwsAppApp
*/
angular.module('openwsAppApp')
.controller('SignupCtrl', function ($scope) {
  this.selectedAction = 'home';

  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
});
