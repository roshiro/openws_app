'use strict';

/**
* @ngdoc function
* @name openwsAppApp.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller of the openwsAppApp
*/
angular.module('openwsAppApp')
.controller('HomeCtrl', ['$http', '$rootScope', function ($http, $rootScope, $scope) {
  this.collections;
  var _this = this;
  $http.get($rootScope.wsUrl + 'api/users/collections?apiKey=' + $rootScope.appApiKey)
    .success(function(data) {
      _this.collections = data;
      console.log(_this.collections);
    });
}]);
