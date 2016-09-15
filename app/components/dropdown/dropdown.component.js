'use strict';

// Define the `customDropdown` component

angular.module('customDropdown')
    .component('customDropdown', {
        bindings: {
            dropdownData: '<'
        },
        templateUrl: 'components/dropdown/dropdown.html',
        controller: function customDropdownController() {
            this.$onChanges = function (changesObj) {
                this.dropdownData = changesObj.dropdownData.currentValue ? changesObj.dropdownData.currentValue : [];
            };

            this.$doCheck = function () {
                $('.special-dropdown .secondary-button').hover(
                    function () {
                        $(this).siblings(".main-button").css({'border-color': '#2A73D5'});
                    }, function () {
                        $(this).siblings(".main-button").css({'border-color': '#DBDFE4'});
                    });
            };
        }
    });