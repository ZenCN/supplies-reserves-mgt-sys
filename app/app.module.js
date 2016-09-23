/**
 * created by edward on 2016/9/21.
 */

(function() {
    'use strict';

    angular.module('app', [
        'ngBaiduMap',
        'app.core',
        'app.layout',
        'app.widgets',
        'app.service',
        'app.customers'
    ]);

    angular.module('app.core', [
        'ui.router',
        'oc.lazyLoad',
        'angular-loading-bar'
    ]);

    angular.module('app.layout', []);

    angular.module('app.widgets', []);

    angular.module('app.service', []);

    angular.module('app.customers', []);
})();