(function() {
    'use strict';

    angular
        .module('website')
        .controller('WorkController', WorkController);

    /** @ngInject */
    function WorkController($state) {
        var vm = this;
        vm.$state = $state;
        vm.title = "Work History";
    }
})();