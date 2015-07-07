'use strict';
/* global celularNumero: true */
/**
 * @ngdoc function
 * @name celularApp.controller:CelularCtrl
 * @description
 * # CelularCtrl
 * Controller of the celularApp
 */
angular.module('celularApp')
  .controller('CelularCtrl', function ($scope) {
    $scope.celular = celularNumero($scope.valor);
  });
