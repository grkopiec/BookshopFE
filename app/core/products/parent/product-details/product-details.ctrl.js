angular.module('bookshop').controller('productDetailsController', function($stateParams, utilService, ordersService) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
		this.product = $stateParams.product;
		this.quantity = 1;
	}
	this.init();
	
	this.incrementQuantity = function() {
		this.quantity++;
	}
	
	this.decrementQuantity = function() {
		this.quantity--;
	}
});