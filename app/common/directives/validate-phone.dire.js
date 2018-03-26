angular.module('bookshop').directive('bsValidatePhone', function() {
	var PHONE_REGEXP = /^([\+]?\d{2}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{3}$/;
	
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attributes, ngModel) {
			if (!ngModel) {
				return;
			}
			
			ngModel.$validators.phone = function(modelValue) {
				return PHONE_REGEXP.test(modelValue);
			}
		}
	}
});