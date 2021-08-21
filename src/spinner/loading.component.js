(function () {
    'use strict';

    angular.module('CountApp').component('loading', {
        template: "<img src='./src/spinner/spinner.gif' ng-if=$ctrl.show>",
        controller: "loadingController"
    });

    angular.module('CountApp').controller('loadingController', loadingController);
    loadingController.$inject = ['$rootScope'];
    function loadingController($rootScope) {
        var $ctrl = this;
        var listener;

        $ctrl.$onInit = function () {
            $ctrl.show = false;
            listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        $ctrl.$onDestroy = function () {
            listener();
        };

        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        }
    }

})();
