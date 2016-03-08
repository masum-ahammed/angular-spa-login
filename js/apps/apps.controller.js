(function () {
    'use strict';

    angular
        .module('app')
        .controller('appsController', appsController);

    appsController.$inject = ['appService'];

    function appsController(appService) {
        /* jshint validthis:true */
        var vm = this;
        vm.apps=[];
        appService.getData().then(function (apps) {
            vm.apps = apps;
        });
    }
})();
