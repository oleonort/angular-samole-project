'use strict';

// Define the `compaignsEmailsComponent` module
angular.module('compaignsEmails')
    .component('compaignsEmails', {
        templateUrl: 'components/compaigns/emails/compaigns-emails.html',
        controller: ['$http',
            function CompaignsEmailsController($http) {
                $http.get('data/compaigns-email.json').then(function(response) {
                    this.overalls = response.data.overalls;
                }.bind(this));
            }
        ]
    });
