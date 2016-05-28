(function() {
    'use strict';

    angular
        .module('website')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state) {
        var vm = this;
        vm.$state = $state;
        vm.projectTitle = "Felix`s Web Site";
        console.log("123");
    }
})();