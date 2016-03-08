(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['loginService', '$animate', '$timeout'];

    function loginController(loginService, $animate, $timeout) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'loginController';

        vm.submitForm = function (isValid) {
            if (!isValid) {
                shakeForm();
                return false;
            }

            loginService.login(vm.email, vm.password).then(function (user) {
                if (!user) {
                    vm.errorMsg = 'Login failed.';
                    shakeForm();
                }
              
            });
        }

        function shakeForm() {
            var element = angular.element('.login-form');
            element.removeClass('shake');
            $animate.addClass(element, 'shake', function () {
                $animate.removeClass(element, 'shake');
            });
        }

       
    }
})();
