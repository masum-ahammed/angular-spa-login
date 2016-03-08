(function () {
    'use strict';

    angular
        .module('app')
        .controller('lockController', lockController);

    lockController.$inject = ['loginService', '$animate', '$location'];

    function lockController(loginService, $animate, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.user = loginService.getLogedInUser();
       

        vm.submitForm = function (isValid) {
            if (!isValid) {
               return shakeForm();
            }
          
            loginService.login(vm.user.email, vm.password).then(function (user) {
                if (!user) {
                    vm.errorMsg = 'Login failed.';
                   return shakeForm();
                }
                $location.path('/apps');
            });
        }

        function shakeForm() {
            var element = angular.element('.lock-form');
            element.removeClass('shake');
            $animate.addClass(element, 'shake', function () {
                $animate.removeClass(element, 'shake');
            });
            return false;
        }

       
    }
})();
