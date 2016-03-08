(function () {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService);

    loginService.$inject = ['$http','$q'];

    function loginService($http, $q) {
        var _User;
        var service = {
            login: login,
            getLogedInUser: getLogedInUser
        };

        return service;

        function login(email, password) {
            var deferred = $q.defer();

            $http.get('js/data/data.json').success(function (data) {
                var user = data.find(function (user) {
                    return user.email == email && user.password == password
                });
                _User = user;
                deferred.resolve(user);
            })
            .error(function (msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }
        function getLogedInUser() {
            return _User;
        }
    }
})();