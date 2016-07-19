(function() {
  'use strict';

  angular
    .module('website')
    .config(routerConfig)
    .run(routeRun);

    function routerConfig($stateProvider, $urlRouterProvider) {

    	$stateProvider
        	.state('main', {
	            url: '/',
	            templateUrl: 'views/main.html',
	            controller: 'MainController',
	            controllerAs: 'vm',
                redirectTo: 'main.home'
	        })
            .state('main.home', {
                url: 'home',
                views: {
                    'main@main': {
                        controller: 'HomeController',
                        controllerAs: 'vm',
                        templateUrl: 'views/content/home.html'
                    }
                }
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
            .state('main.travelMap', {
                url: 'travelMap',
                views: {
                    'main@main': {
                        controller: 'TravelMapController',
                        controllerAs: 'vm',
                        templateUrl: 'views/content/travelMap.html'
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

    function routeRun($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if(to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {location: 'replace'})
            }
        });
    }

})();

