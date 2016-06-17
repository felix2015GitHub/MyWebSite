(function() {
    'use strict';

    angular
        .module('website')
        .controller('ProjectController', ProjectController);

    /** @ngInject */
    function ProjectController($state) {
        var vm = this;
        vm.$state = $state;
        vm.title = "Project List";
    }
})();