'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp').controller('cloneController', ['$scope', '$timeout', '$rootScope','service','config','$state', '$stateParams', function ($scope, $timeout, $rootScope, service,config,$state, $stateParams) {
 	service.intervalfunc(service);
;}]);