'use strict';

angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('not-ready-yet', {
                    url: '/not-ready-yet',
                    template: '<not-ready-yet></not-ready-yet>'
                })
                .state('compaigns', {
                    url: '/compaigns',
                    template: '<compaigns-component></compaigns-component>',
                    redirectTo: 'compaigns.email'
                })
                .state('compaigns.email', {
                    url: '/email',
                    template: '<compaigns-emails></compaigns-emails>'
                })
                .state('compaigns.push-notification', {
                    url: '/push-notification',
                    template: '<not-ready-yet></not-ready-yet>'
                })
                .state('compaigns.in-app-notification', {
                    url: '/in-app-notification',
                    template: '<not-ready-yet></not-ready-yet>'
                })
                .state('compaigns.multi-channel', {
                    url: '/multi-channel',
                    template: '<not-ready-yet></not-ready-yet>'
                });

            $urlRouterProvider.otherwise('/not-ready-yet');
        }
    ]).run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, {location: 'replace'})
        }
    });
}]);
