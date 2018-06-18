angular.module('bookshop').directive('bsDifferentThan', function() {
	return {
		restrict: 'A',
		require: '?ngModel',
		scope: {
			otherModelValue: "=bsDifferentThan"
		},
		link: function(scope, element, attributes, ngModel) {
			if (!ngModel) {
				return;
			}
			
			ngModel.$validators.differentthan = function(modelValue, viewValue) {
				return viewValue !== scope.otherModelValue;
			}
			
			scope.$watch('otherModelValue', function() {
				ngModel.$validate();
			});
		}
	}
});