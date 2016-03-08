(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$location']; 

    function loginController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'loginController';

        vm.submitForm = function () {

        }

       
    }
})();
