(function(){

	var PROJECT_NAME = "Felix`s Web Site",
		FOOTER_STRING = "Felix Cheng 2016";

	var app = angular.module('website', []);

	app.directive('myTabs', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: ['$scope', function($scope) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane) {
                    if(pane.attr == "show"){
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            }],
            templateUrl: 'my-tabs.html'
        };
    });

    app.directive('myPane', function() {
        return {
            require: '^^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
                attr: '@'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'my-pane.html'
        };
    });

	app.controller('Ctrl', function(){

		var self = this;
		self.projectName = PROJECT_NAME;
		self.footerString = FOOTER_STRING;

	});

})();