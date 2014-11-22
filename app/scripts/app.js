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
  .run(function($log, $location, user) {
    user.init({ appId: '54707a9c6d212' });
    var redirectUrls = ["/signup", "/login", "/", ""];
    if(redirectUrls.indexOf($location.$$path) > 0 && user.status().authenticated) {
      $log.debug("Redirecting to home");
      $location.path('/home');
    }
  });
