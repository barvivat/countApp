(function () {
    'use strict';

    angular.module('CountApp').service('counterService', counterService);

    counterService.$inject = [];

    function counterService(){
        var service = this;

        service.calcSum = function(sumInput) {
            var itemsArr = sumInput.split('+');
            var sum = 0;

            for(var i=0; i < itemsArr.length; i++) {
                sum += Number(itemsArr[i]);
            }

            return sum;
        };

        service.getItems = function() {
            return data;
        }

    }
})();