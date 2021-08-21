(function () {
    'use strict';

    angular.module('CountApp', [])
    .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

}());