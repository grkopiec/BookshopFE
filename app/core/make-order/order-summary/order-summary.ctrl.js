angular.module('bookshop').controller('orderSummaryController', function(utilService, ordersService, shippingPricesValue) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
		this.shippingPricesValue = shippingPricesValue;
		this.angular = angular;
		
		this.productsPrice = this.ordersService.calculateTotalPrice();
		this.shippingPrice = this.calculateShippingCost();
	}
	
	//TODO doubled method
	this.calculateTotalPrice = function() {
		var totalPrice = this.productsPrice + this.shippingPrice;
		return this.utilService.formatPrice(totalPrice);
	}

	//TODO doubled method
	this.calculateShippingCost = function() {
		if (this.angular.equals({}, this.ordersService.order.order) === false
				&& this.ordersService.order.order.hasOwnProperty('shippingMethod') === true) {
			this.shippingPrice = this.shippingPricesValue[this.ordersService.order.order.shippingMethod];
			return this.shippingPrice;
		} else {
			return 0;
		}
	}

	this.init();
});