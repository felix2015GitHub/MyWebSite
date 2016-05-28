(function() {
  'use strict';

  angular
    .module('website')
    .config(routerConfig)
    //.run(routeRun);

    function routerConfig($stateProvider, $urlRouterProvider) {

    	$stateProvider
        	.state('main', {
	            url: '/',
	            templateUrl: 'views/main.html',
	            controller: 'MainController',
	            controllerAs: 'vm',
	        })
    	$urlRouterProvider.otherwise('/');

    }

    function routeRun($rootScope, $urlRouter, $cookies, $state, $q) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            event.preventDefault();
        });
    }

})();

