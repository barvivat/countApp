(function () {
    'use strict';

    angular.module('CountApp').component('category', {
        templateUrl: "./src/templates/category.template.html",
        bindings: {
            title: "<",
            items: "<"
        }
    });

})();
