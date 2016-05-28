(function() {
    'use strict';

    angular
        .module('website')
        .controller('CollectionsController', CollectionsController);

    /** @ngInject */
    function CollectionsController($state) {
        var vm = this;
        vm.$state = $state;
        vm.title = "Collections";
    }
})();