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

  // Init code highlight
  hljs.initHighlighting();

  $rootScope.$on('apiKeyLoaded', function(event, apiKey) {
    $http.get($rootScope.wsUrl + 'api/users/collections?apiKey=' + apiKey)
      .success(function(data) {
        _this.collections = data;
      });
  });
}]);
