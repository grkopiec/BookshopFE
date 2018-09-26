angular.module('bookshop').service('ordersService', function($filter) {
	this.init = function() {
		this.order = {
			order: {},
			orderItems: []
		};
	}
	this.init();
	
	this.addProduct = function(product, quantity) {
		var orderItem = $filter('filter')(this.order.orderItems, {productId: product.id});
		
		if (orderItem.length === 0) {
			var newOrderItem = {productId: product.id, name: product.name, price: product.price, quantity: quantity};
			this.order.orderItems.push(newOrderItem);
			return newOrderItem.quantity;
		} else {
			orderItem[0].quantity += quantity;
			return orderItem[0].quantity;
		}
	}
	
	this.countProducts = function(productId) {
		var orderItem = $filter('filter')(this.order.orderItems, {productId: productId});

		if (orderItem.length === 0) {
			return 0;
		}
		return orderItem[0].quantity;
	}
});