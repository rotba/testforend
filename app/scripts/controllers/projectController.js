'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp').controller('projectController', ['$scope', '$timeout', '$rootScope', '$interval', 'service','config','$state', '$stateParams', function ($scope, $timeout, $rootScope, $interval, service, config, $state, $stateParams) {
 	
 	service.intervalfunc(service);
 	if (!$stateParams.id){
 		$state.transitionTo('enter');
 	}
 	$scope.get_status = function(){

 	}
 	$scope.userArray = [
 		{
 			task:'clone',
 			title:'clone your project',
 			state:,
 			description: 'this part will upload your git project to our server, follow the instroction'
 		},
 		{
 			task:'offline',
 			title:'learn about your code offline'
 			state:,
 			description:'In this part we will run an AI algorithim to learn about your code, follow the instroction'
 		},
 		{
 			task:'online',
 			title:'learn about your code with maven'
 			state:,
 			description:'In this part we will run som tests and get results for your project' 			
 		},
		{
 			task:'prediction',
 			title:'get prediction'
 			state:,
 			description:'In this part we will get a prediction for your part in the code' 			
 		} 		
 	];

 	$scope.get_state = function(str){
 		switch (str){
 			case 'create_folders':
 				return null;
 			break;
 			case 'start_clone':
 				return 'dashboard.clone';
 			break;
 			case 'end_clone':
 				return 'dashboard.clone';
 			break;
 			case 'upload_bug_file':
 				return 'dashboard.prepareOffline';
 			break;
 			case 'get_prediction':

 			break;
 			case 'start_offline':
 				return 'dashboard.runOffline';
 			break;
 			case 'start_testing':
 				return 'dashboard.prepareOnline';
 			break;
 			case 'end_testing':
 				return 'dashboard.prepareOnline';
 			break;
 			case 'end_offline':
 				return 'dashboard.runOffline';
 			break;
 			case 'pick_version':
 				return 'dashboard.prepareVersion';
 			break;
 			case 'check_version':
 				return 'dashboard.prepareVersion';
 			break;
 			case 'prepare_jar':
 				return 'dashboard.prepareVersion';
 			break; 	
 			case 'update_pom':
 				return 'dashboard.pomUpdate';
 			break;		 			
 			case 'prepare_mvn':
 				return 'dashboard.prepareOnline';
 			break;
 			case 'get_prediction':
 				return 'dashboard.prediction';
 			break;
 			case 'run_prediction':
 				return 'dashboard.prediction';
 			break;
 			case 'prepare_prediction':
 				return 'dashboard.prediction';
 			break; 			 			
 		}
 	}
//    
	$scope.task_page = function(state,params){
		$scope.task = state
		state = $scope.get_state(state);
		$state.transitionTo(state,{id:params,task:$scope.task});
	}

;}]);