angular.module('bookshop').directive('bsValidateEmail', function() {
	var EMAIL_REGEXP = /^[_a-z\d]+(\.[_a-z\d]+)*@[-a-z\d]+(\.[-a-z\d]+)*(\.[a-z]{2,5})$/;
	
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