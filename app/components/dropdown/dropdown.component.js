'use strict';

// Define the `customDropdown` component

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