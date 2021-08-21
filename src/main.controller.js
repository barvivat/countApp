(function () {
    'use strict';

    angular.module('CountApp').controller('mainController', mainController)

    mainController.$inject = ['counterService'];

    function mainController(counterService) {
        var main = this;
        
        counterService.getItems().then(function(data) {
            main.data = data;
        });
    }

}());