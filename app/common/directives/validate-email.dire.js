angular.module('bookshop').directive('bsValidateEmail', function() {
	var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/;
	
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attributes, ngModel) {
			if (!ngModel) {
				return;
			}
			
			ngModel.$validators.email = function(modelValue) {
				return EMAIL_REGEXP.test(modelValue);
			}
		}
	}
});