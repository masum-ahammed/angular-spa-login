(function () {
    'use strict';

    angular
        .module('app')
        .controller('appsController', appsController);

    appsController.$inject = ['appService', '$scope', '$interval', '$location'];

    function appsController(appService, $scope, $interval, $location) {
        /* jshint validthis:true */
        var vm = this;
        var intervalCount =0;
        vm.apps = [];
        vm.idleTime = 0;
        var idelInterval = 10 * 1000;
        

        getAppsData();
        startInterval();
        checkIdle();
       
        angular.element('.app-container').bind('mousemove', function (e) {
            vm.idleTime = 0;
            $interval.cancel(vm.intervalCount);
            startInterval();
            $scope.$apply();
        });
        function checkIdle () {
            $scope.$watch("vm.idleTime", function (n, o) {
                if (n > 0) {
                    $location.path('/lock');
                }
            });
        };

        function getAppsData() {
            appService.getData().then(function (apps) {
                vm.apps = apps;
            });
        }
        function startInterval() {
           
            vm.intervalCount = $interval(function () {
                vm.idleTime += idelInterval;
            }, idelInterval);
        }
    }
   
   
})();
