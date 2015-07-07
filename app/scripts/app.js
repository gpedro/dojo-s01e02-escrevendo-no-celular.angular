'use strict';

/**
 * @ngdoc overview
 * @name celularApp
 * @description
 * # celularApp
 *
 * Main module of the application.
 */
angular
  .module('celularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
