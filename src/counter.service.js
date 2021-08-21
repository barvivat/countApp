(function () {
    'use strict';

    angular.module('CountApp').service('counterService', counterService);

    counterService.$inject = ['$http'];

    function counterService($http){
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
            return $http({
                method: 'GET',
                url: "https://count-app-server.herokuapp.com/items.json"
                })
                .then(function(response) {
                    return response.data;
                });
        }

    }
})();