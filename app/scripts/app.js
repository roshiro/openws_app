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
        login: true
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .run(function($http, $log, $location, $rootScope, user) {
    user.init({ appId: '54707a9c6d212' });
    var redirectUrls = ["/signup", "/login", "/", ""];
    if(redirectUrls.indexOf($location.$$path) > 0 && user.status().authenticated) {
      $location.path('/home');
    }

    $rootScope.$on('user.login', function() {
      var userUrl = "https://openws.herokuapp.com/users?apiKey=2as343a80432",
          userJson = {
            email: user.current.email,
            user_id: user.current.user_id,
            api_key: "ajs68723jl2l32"
          },
          query = JSON.stringify({ user_id : user.current.user_id });

      $http.get(userUrl + "&q="+query).success(function(data) {
        if(data.length == 0) {
          $log.debug("user does not exist in DB");
          $http.post(userUrl, userJson).success(function(data) {
            $log.debug("saved");
            $rootScope.apiKey = "ajs68723jl2l32";
          });
        } else {
          $log.debug("user does exist in DB");
          $rootScope.apiKey = data[0].api_key;
        }
      });
    });
  });
