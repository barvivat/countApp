(function () {
    'use strict';

    angular.module('CountApp').controller('mainController', mainController)

    mainController.$inject = ['counterService'];

    function mainController(counterService) {
        var main = this;
        
        main.data = counterService.getItems();

    }

}());