'use strict';

// Define the `compaignsEmails` component

angular.module('compaignsEmails')
    .component('compaignsEmails', {
        templateUrl: 'components/compaigns/emails/compaigns-emails.html',
        controller: ['$http', '$timeout',
            function CompaignsEmailsController($http, $timeout) {
                $http.get('data/compaigns-email.json').then(function(response) {
                    this.overalls = response.data.overalls;
                    this.emailItems = response.data.emailItems;
                    this.emailItemsDropdown = response.data.emailItemsDropdown;
                }.bind(this));

                $http.get('data/dropdown-groups.json').then(function(response) {
                    this.groupDropdownData = response.data;
                }.bind(this));

                $http.get('data/dropdown-statuses.json').then(function(response) {
                    this.statusesDropdownData = response.data;
                }.bind(this));

                this.$doCheck = function() {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }
        ]
    });
