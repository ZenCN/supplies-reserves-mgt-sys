/**
 * created by edward on 2016/9/26.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('system_mgt_ctrl', system_mgt_ctrl);

    system_mgt_ctrl.$inject = ['$scope'];

    function system_mgt_ctrl($scope) {
        var vm = $scope.$parent;

        if ($.isEmptyObject(vm.system_mgt)) {

        }
    }
})();
