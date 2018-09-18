angular.module('bookshop').service('ordersService', function($filter) {
	this.init = function() {
		this.order = {
			order: {},
			orderItems: []
		};
	}
	this.init();
	
	this.countOrderedProducts = function(productId) {
		var orderItem = $filter('filter')(this.order.orderItems, {productId: productId});
		
		if (orderItem.length === 0) {
			return 0;
		}
		return orderItem.quantity;
	}
});