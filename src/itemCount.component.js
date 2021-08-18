(function () {
    'use strict';

    angular.module('CountApp').component('itemCount', {
        templateUrl: "./src/templates/itemCount.template.html",
        bindings: {
            name: "<"
        },
        controller: "itemCountController",
        controllerAs: "itemCtrl"
    });

    angular.module('CountApp').controller('itemCountController', itemCountController);
    itemCountController.$inject = ['counterService'];
    function itemCountController(counterService) {
        var itemCtrl = this;
        
        itemCtrl.input = "";
        itemCtrl.sum = counterService.calcSum(itemCtrl.input);

        itemCtrl.updateSum = function(){
            itemCtrl.sum = counterService.calcSum(itemCtrl.input);
        }

    }

})();
