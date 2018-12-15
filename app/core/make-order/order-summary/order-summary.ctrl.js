angular.module('bookshop').controller('orderSummaryController', function(utilService, ordersService) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
	}

	this.init();
});
