angular.module('bookshop').controller('orderSummaryController', function($state, utilService, userService, ordersService, ordersFactory) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
	}
	
	this.save = function() {
		ordersService.order.order.totalPrice = ordersService.calculateTotalPrice();
		if (userService.user.hasOwnProperty('userId')) {
			ordersService.order.order.user = {
				id: userService.user.userId
			}
		}

		var self = this;
		ordersFactory.save(this.ordersService.order).$promise.finally(function() {
			self.ordersService.clear();
			$state.go('products');
		});
	}

	this.init();
});
