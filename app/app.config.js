﻿/**
 * created by edward on 2016/9/21.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.when('', '/head');
        $urlRouterProvider.otherwise('/head');

        var resolve_dep = function (config) {
            return {
                load: [
                    '$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(config);
                    }
                ]
            };
        };

        $stateProvider
            .state('head', {
                abstract: true,
                controller: 'head_ctrl',
                templateUrl: 'head/head.html',
                resolve: resolve_dep([
                    'head/head.css',
                    'head/head_ctrl.js'
                ])
            })
            .state('head.index', {
                controller: 'index_ctrl',
                //templateUrl: 'index/index.html',
                template: '<baidu-map options="mapOptions"></baidu-map>',
                resolve: resolve_dep([
                    //'index/index.css',
                    'index/index_ctrl.js'
                ])
            });
    }
})();