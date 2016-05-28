(function() {
    'use strict';

    angular
        .module('website')
        .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController($state) {
        var vm = this;
        vm.$state = $state;
        vm.title = "About Me";
    }
})();