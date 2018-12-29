angular.module('bookshop').controller('cmsOrdersController', function($stateParams, utilService, userService, ordersService, ordersFactory) {
	this.init = function() {
		this.$stateParams = $stateParams;
		this.utilService = utilService;
		if (this.$stateParams.action === 'list') {
			this.orders = ordersFactory.query();
		} else if (this.$stateParams.action === 'edit') {
			this.order = this.$stateParams.order;
			var model = this;
			ordersFactory.getItems({id: this.order.id}).$promise.then(function(orderElements) {
				model.orderElements = orderElements;
				var rawProductsPrice = ordersService.calculateItemsProductsPrice(orderElements.orderItems);
				model.productsPrice = model.utilService.formatPrice(rawProductsPrice);
				var rawShippingCost = model.order.totalPrice - rawProductsPrice;
				model.shippingCost = model.utilService.formatPrice(rawShippingCost);
			});
		}
	}

	this.init();
});
