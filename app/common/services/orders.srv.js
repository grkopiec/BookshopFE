angular.module('bookshop').service('ordersService', function($filter, shippingPricesValue) {
	this.init = function() {
		this.shippingPricesValue = shippingPricesValue;
		this.angular = angular;

		this.clear();
	}

	this.clear = function() {
		this.order = {
			order: {
				status: 'NEW',
				paid: false
			},
			orderItems: []
		};
	}

	//TODO quantity should be max 999
	//TODO ordered products should be max 99
	this.changeQuantity = function(product, quantity) {
		var orderItemIndex = this.order.orderItems.findIndex((item) => {
			return item.id === product.id;
		});

		if (orderItemIndex === -1) {
			if (quantity === 0) {
				return 0;
			}

			var newOrderItem = {productId: product.id, name: product.name, price: product.price, quantity: quantity, imagePath: product.imagePath};
			this.order.orderItems.push(newOrderItem);
			return newOrderItem.quantity;
		} else {
			if (quantity === 0) {
				this.order.orderItems.splice(orderItemIndex, 1);
				return 0;
			} else {
				this.order.orderItems[orderItemIndex].quantity = quantity;
				return this.order.orderItems[orderItemIndex].quantity;
			}
		}
	}

	this.countProducts = function(productId) {
		var orderItem = $filter('filter')(this.order.orderItems, {id: productId});

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

	this.calculateProductsPrice = function() {
		var productsPrice = 0;
		
		angular.forEach(this.order.orderItems, function(value, key) {
			productsPrice += value.quantity * value.price;
		});
		return productsPrice;
	}

	this.calculateProductsPrice = function(orderItems) {
		var productsPrice = 0;
		for (var i = 0; i < orderItems.length; i++) {
			var itemPrice = orderItems[i].quantity * orderItems[i].price;
			productsPrice += itemPrice;
		}
		return productsPrice;
	}

	this.calculateShippingPrice = function() {
		if (this.angular.equals({}, this.order.order) === false
				&& this.order.order.hasOwnProperty('shippingMethod') === true) {
			this.shippingPrice = this.shippingPricesValue[this.order.order.shippingMethod];
			return this.shippingPrice;
		} else {
			return 0;
		}
	}

	this.calculateTotalPrice = function() {
		return this.calculateProductsPrice() + this.calculateShippingPrice();
	}

	this.init();
});
