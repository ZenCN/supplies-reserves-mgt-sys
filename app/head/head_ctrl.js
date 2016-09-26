/**
 * created by edward on 2016/9/21.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('head_ctrl', head_ctrl);

    head_ctrl.$inject = ['$scope'];

    function head_ctrl($scope) {
        var vm = $scope;

        vm.workbench = {};

        vm.system_mgt = {};

        vm.supplies_mgt = {};

        vm.planning_mgt = {};

        vm.logistic_mgt = {};
    }
})();
