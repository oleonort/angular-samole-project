'use strict';

// Define the `compaignsComponent` module
angular.module('compaignsModule')
    .component('compaignsComponent', {
        templateUrl: 'components/compaigns/compaigns.html',
        controller: ['$http', '$location',
            function CompaignsComponentController($http, $location) {
                $http.get('data/compaigns-menu.json').then(function (response) {
                    this.menuItems = response.data;
                }.bind(this));

                this.itemActiveClass = function (page) {
                    var current = $location.path().substring(1).indexOf(page);
                    return current > -1 ? "active" : "";
                };
            }
        ]
    });
