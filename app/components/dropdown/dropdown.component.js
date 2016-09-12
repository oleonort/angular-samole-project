'use strict';

// Define the `mainMenuComponent` module
angular.module('customDropdown')
    .component('customDropdown', {
        bindings: {
            dropdownData: '<'
        },
        templateUrl: 'components/dropdown/dropdown.html',
        controller: function customDropdownController () {
            this.$onChanges = function (changesObj) {
                this.dropdownData = changesObj.dropdownData.currentValue ? changesObj.dropdownData.currentValue : [];
            };
        }
    });