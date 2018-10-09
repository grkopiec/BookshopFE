angular.module('bookshop').controller('orderProductsController', function(utilService, ordersService) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
	}
	
	this.init();
});