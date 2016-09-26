/**
 * created by edward on 2016/9/26.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('supplies_mgt_ctrl', supplies_mgt_ctrl);

    supplies_mgt_ctrl.$inject = ['$scope'];

    function supplies_mgt_ctrl($scope) {
        var vm = $scope.$parent;

        if ($.isEmptyObject(vm.supplies_mgt)) {

        }
    }
})();
