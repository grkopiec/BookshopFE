angular.module('bookshop').controller('productDetailsController', function($stateParams, utilService) {
	this.init = function() {
		this.utilService = utilService;
		this.product = $stateParams.product;
	}
	this.init();
});