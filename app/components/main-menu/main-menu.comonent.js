'use strict';

// Define the `mainMenuComponent` module
angular.module('mainMenu')
    .component('mainMenu', {
        templateUrl: 'components/main-menu/main-menu.html',
        controller: ['$http', '$location',
            function MainMenuController($http, $location) {
                $http.get('data/main-menu.json').then(function(response) {
                    this.menuCategories = response.data;
                }.bind(this));

                this.itemActiveClass = function(page) {
                    var current = $location.path().substring(1).indexOf(page);
                    return current > -1 ? "active" : "";
                };
            }
        ]
    });