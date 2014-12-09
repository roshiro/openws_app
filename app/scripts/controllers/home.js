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
  $http.get($rootScope.wsUrl + 'api/users/collections?apiKey=' + $rootScope.appApiKey)
    .success(function(data) {
      console.log(data);
    });
}]);
