/**
 * created by edward on 2016/9/26.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('planning_mgt_ctrl', planning_mgt_ctrl);

    planning_mgt_ctrl.$inject = ['$scope'];

    function planning_mgt_ctrl($scope) {
        var vm = $scope.$parent;

        if ($.isEmptyObject(vm.planning_mgt)) {

        }
    }
})();
