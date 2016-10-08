/**
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

        $urlRouterProvider.when('', '/workbench');
        $urlRouterProvider.otherwise('/workbench');

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
                url: '/index',
                controller: 'index_ctrl',
                templateUrl: 'index/index.html',
                resolve: resolve_dep([
                    'index/index.css',
                    'index/index_ctrl.js'
                ])
            }).state('head.workbench', {
            url: '/workbench',
            controller: 'workbench_ctrl',
            templateUrl: 'workbench/workbench.html',
            resolve: resolve_dep([
                'workbench/workbench.css',
                'bower_components/angular.plugins/angular-ui-calendar.js',
                'workbench/workbench_ctrl.js'
            ])
        }).state('head.system_mgt', {
            url: '/system_mgt',
            controller: 'system_mgt_ctrl',
            templateUrl: 'system_mgt/system_mgt.html',
            resolve: resolve_dep([
                'system_mgt/system_mgt.css',
                'system_mgt/system_mgt_ctrl.js'
            ])
        }).state('head.supplies_mgt', {
            url: '/supplies_mgt',
            controller: 'supplies_mgt_ctrl',
            templateUrl: 'supplies_mgt/supplies_mgt.html',
            resolve: resolve_dep([
                'supplies_mgt/supplies_mgt.css',
                'supplies_mgt/supplies_mgt_ctrl.js'
            ])
        }).state('head.planning_mgt', {
            url: '/planning_mgt',
            controller: 'planning_mgt_ctrl',
            templateUrl: 'planning_mgt/planning_mgt.html',
            resolve: resolve_dep([
                'planning_mgt/planning_mgt.css',
                'planning_mgt/planning_mgt_ctrl.js'
            ])
        }).state('head.logistic_mgt', {
            url: '/logistic_mgt',
            controller: 'logistic_mgt_ctrl',
            templateUrl: 'logistic_mgt/logistic_mgt.html',
            resolve: resolve_dep([
                'logistic_mgt/logistic_mgt.css',
                'logistic_mgt/logistic_mgt_ctrl.js'
            ])
            });
    }
})();