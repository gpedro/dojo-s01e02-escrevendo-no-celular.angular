'use strict';

/**
 * @ngdoc directive
 * @name celularApp.directive:celular
 * @description
 * # celular
 */
angular.module('celularApp')
  .directive('celular', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/celular.html',
      scope: {
        valor: '@'
      }
    };
  });
