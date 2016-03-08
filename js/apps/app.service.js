(function () {
    'use strict';

    angular
        .module('app')
        .factory('appService', appService);

    appService.$inject = ['$http','$q'];

    function appService($http, $q) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            var deferred = $q.defer();

            $http.get('js/data/apps.json').success(function (apps) {
               
                deferred.resolve(apps);
            })
            .error(function (msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }
    }
})();