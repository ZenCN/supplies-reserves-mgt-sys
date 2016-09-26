/**
 * created by edward on 2016/9/26.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('logistic_mgt_ctrl', logistic_mgt_ctrl);

    logistic_mgt_ctrl.$inject = ['$scope'];

    function logistic_mgt_ctrl($scope) {
        var vm = $scope.$parent;

        if ($.isEmptyObject(vm.logistic_mgt)) {

        }
    }
})();
