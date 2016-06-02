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
        vm.footerInfo = "Copyright © Felix`s Website 2016"
    }
})();