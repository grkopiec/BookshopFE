angular.module('bookshop').controller('userOrdersController', function($stateParams, utilService, userService, ordersFactory) {
	this.init = function() {
		this.$stateParams = $stateParams;
		if (this.$stateParams.action === 'list') {
			this.orders = ordersFactory.findForUser({id: userService.user.userId});
		} else if (this.$stateParams.action === 'show') {
			this.order = this.$stateParams.order;
			var model = this;
			ordersFactory.getItems({id: this.order.id}).$promise.then(function(orderElements) {
				model.orderElements = orderElements;
				model.productsPrice = model.countProductsPrice(orderElements.orderItems);
				model.shippingCost = model.order.totalPrice - model.productsPrice;
			});
		}
		this.utilService = utilService;
	}

	this.countProductsPrice = function(orderItems) {
		var productsPrice = 0;
		for (var i = 0; i < orderItems.length; i++) {
			var itemPrice = orderItems[i].quantity * orderItems[i].price;
			productsPrice += itemPrice;
		}
		return productsPrice;
	}

	this.init();
});
