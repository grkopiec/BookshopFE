angular.module('bookshop').directive('bsValidatePrice', function() {
	var PRICE_REGEXP = /^[0-9]\d{0,6}(\,\d{1,2})?$/;
	
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attributes, ngModel) {
			if (!ngModel) {
				return;
			}
			
			ngModel.$validators.price = function(modelValue) {
				return PRICE_REGEXP.test(modelValue);
			}
		}
	}
});