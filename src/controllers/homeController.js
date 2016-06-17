(function() {
    'use strict';

    angular
        .module('website')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($state) {
        var vm = this;
        vm.$state = $state;
        vm.title = "Welcome to Felix`s Web Site ~ !";
    }
})();