(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)


        // 3rd Party Modules
        //'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'js/login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                }).
                 when('/apps', {
                     templateUrl: 'js/apps/apps.html',
                     controller: 'appsController',
                     controllerAs: 'vm'
                 }).
                when('/lock', {
                    templateUrl: 'js/login/lock-screen.html',
                    controller: 'lockController',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
    // Handle routing errors and success events
    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
   
})();
