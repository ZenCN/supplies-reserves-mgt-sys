/**
 * created by edward on 2016/9/22.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('index_ctrl', index_ctrl);

    index_ctrl.$injector = ['$scope'];

    function index_ctrl($scope) {
        var vm = $scope;

        vm.ak = 'warfKzxekIHWdxOecMkopmNZsFP3pZVw';

        vm.offlineOpts = {
            retryInterval: 10000,
            txt: 'Offline Mode'
        };

        var longitude = 121.506191;
        var latitude = 31.245554;
        vm.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ShangHai',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                width: 49,
                height: 60,
                title: 'Where',
                content: 'Put description here'
            }]
        };

        $scope.loadMap = function (map) {
            console.log(map); //gets called while map instance created
        };
    };
})();
