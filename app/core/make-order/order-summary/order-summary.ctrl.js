angular.module('bookshop').controller('orderSummaryController', function($state, utilService, ordersService, ordersFactory) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
	}
	
	this.save = function() {
		var self = this;
		ordersFactory.save(this.ordersService.order).$promise.finally(function() {
			self.ordersService.clear();
			$state.go('products');
		});
	}

	this.init();
});
