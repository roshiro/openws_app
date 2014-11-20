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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
