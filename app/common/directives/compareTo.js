angular.module('bookshop').directive('bsCompareTo', function() {
	return {
		restrict: 'A',
		require: '?ngModel',
		scope: {
			otherModelValue: "=bsCompareTo"
		},
		link: function(scope, element, attributes, ngModel) {
			if (!ngModel) {
				return;
			}
			
			ngModel.$validators.compareto = function(modelValue, viewValue) {
				return viewValue === scope.otherModelValue;
			}
			
			scope.$watch('otherModelValue', function() {
				ngModel.$validate();
			});
		}
	}
});