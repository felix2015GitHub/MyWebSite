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
            .state('main.about', {
                url: 'about',
                views: {
                    'main@main': {
                        controller: 'AboutController',
                        controllerAs: 'vm',
                        templateUrl: 'views/content/about.html'
                    }
                }
            })
            .state('main.work', {
                url: 'work',
                views: {
                    'main@main': {
                        controllerAs: 'vm',
                        controller: 'WorkController',
                        templateUrl: 'views/content/work.html'
                    }
                }
            })
            .state('main.project', {
                url: 'project',
                views: {
                    'main@main': {
                        controller: 'ProjectController',
                        controllerAs: 'vm',
                        templateUrl: 'views/content/project.html'
                    }
                }
            })
            .state('main.collections', {
                url: 'collections',
                views: {
                    'main@main': {
                        controller: 'CollectionsController',
                        controllerAs: 'vm',
                        templateUrl: 'views/content/collections.html'
                    }
                }
            })
    	$urlRouterProvider.otherwise('/');

    }

    function routeRun($rootScope, $urlRouter, $cookies, $state, $q) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            event.preventDefault();
        });
    }

})();

