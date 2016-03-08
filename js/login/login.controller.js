(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['loginService', '$animate', '$location'];

    function loginController(loginService, $animate, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'loginController';

        vm.submitForm = function (isValid) {
            if (!isValid) {
               return shakeForm();
            }

            loginService.login(vm.email, vm.password).then(function (user) {
                if (!user) {
                    vm.errorMsg = 'Login failed.';
                   return shakeForm();
                }
                $location.path('/apps');
            });
        }

        function shakeForm() {
            var element = angular.element('.login-form');
            element.removeClass('shake');
            $animate.addClass(element, 'shake', function () {
                $animate.removeClass(element, 'shake');
            });
            return false;
        }

       
    }
})();
