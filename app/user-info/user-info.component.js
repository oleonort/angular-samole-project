'use strict';

// Define the `userInfo` component
angular.module('userInfo')
    .component('userInfo', {
        templateUrl: 'user-info/user-info.html',
        controller: ['$http',
            function UserInfoController($http) {
                $http.get('data/user-info.json').then(function(response) {
                    this.userInfo = response.data;
                }.bind(this));
            }
        ]
    });