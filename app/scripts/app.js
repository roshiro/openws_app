'use strict';

/**
 * @ngdoc overview
 * @name openwsAppApp
 * @description
 * # openwsAppApp
 *
 * Main module of the application.
 */
angular
  .module('openwsAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'UserApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        public: true
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        public: true
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        public: false
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        public: true
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .run(function($http, $log, $location, $rootScope, user) {
    user.init({ appId: '54707a9c6d212' });
    $rootScope.wsUrl = "https://openws.herokuapp.com/";
    $rootScope.appApiKey = "b9276e788652f8287e80242dab6e5a2a";

    var redirectUrls = ["/signup", "/login", "/", ""];

    if(($location.$$path == "" || $location.$$path == "#/") && !user.status().authenticated) {
      $location.path('#/');
    }

    if(redirectUrls.indexOf($location.$$path) >= 0 && user.status().authenticated) {
      $log.debug("redirecting");
      $location.path('/home');
    }

    $rootScope.$on('user.login', function() {
      var userUrl = $rootScope.wsUrl + 'api/users/new?apiKey=' + $rootScope.appApiKey,
          userJson = {
            email: user.current.email,
            user_id: user.current.user_id
          };

      $http.post(userUrl, userJson).success(function(data) {
        $rootScope.apiKey = data.api_key;
      });
    });
  });
