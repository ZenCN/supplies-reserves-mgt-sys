/**
 * created by edward on 2016/9/26.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('workbench_ctrl', workbench_ctrl);

    workbench_ctrl.$inject = ['$scope'];

    function workbench_ctrl($scope) {
        var vm = $scope.$parent;

        if ($.isEmptyObject(vm.workbench)) {

        }
    }
})();
