angular.module('bookshop').controller('orderDetailsController', function($state, utilService, ordersService, shippingPricesValue) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
		this.shippingPricesValue = shippingPricesValue;
		this.angular = angular;
	}

	this.validFormAndGoToSummary = function() {
		this.detailsForm.$setSubmitted();
		this.detailsForm.paymentMethod.$setTouched();
		this.detailsForm.shippingMethod.$setTouched();
		if (this.detailsForm.$valid) {
			$state.go('make-order.order-summary');
		}
	}

	this.init();
});
