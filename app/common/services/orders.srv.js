angular.module('bookshop').service('ordersService', function($filter) {
	this.init = function() {
		this.order = {order: {}, orderItems: []};
	}
	
	//TODO quantity should be max 999
	//TODO ordered products should be max 99
	this.changeQuantity = function(product, quantity) {
		var orderItem = $filter('filter')(this.order.orderItems, {productId: product.id});
		//TODO list should have 0 or 1 element
		
		if (orderItem.length === 0) {
			var newOrderItem = {productId: product.id, name: product.name, price: product.price, quantity: quantity, imagePath: product.imagePath};
			this.order.orderItems.push(newOrderItem);
			return newOrderItem.quantity;
		} else {
			orderItem[0].quantity = quantity;
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
	
	this.countAllProducts = function() {
		var orderedProducts = 0;
		
		angular.forEach(this.order.orderItems, function(value, key) {
			orderedProducts += value.quantity;
		});
		return orderedProducts;
	}
	
	this.calculateTotalPrice = function() {
		var totalPrice = 0;
		
		angular.forEach(this.order.orderItems, function(value, key) {
			totalPrice += value.quantity * value.price;
		});
		return totalPrice;
	}
	
	this.init();
});