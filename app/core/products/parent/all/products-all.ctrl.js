angular.module('bookshop').controller('productsAllController', function($state, $stateParams, utilService, ordersService, productsFactory) {
	this.init = function() {
		this.products = productsFactory.query();
		this.utilService = utilService;
		this.ordersService = ordersService;
		this.query = {
			category: $stateParams.category
		};
		this.search();
	}	
	
	this.search = function() {
		this.products = productsFactory.search(this.query);
	}
	
	this.addToCart = function(product, countOrdered) {
		if (countOrdered === 0) {
			return this.ordersService.changeQuantity(product, 1);
		}
		return countOrdered;
	}
	
	this.goToProductDetails = function(product) {
		$state.go('products.parent.details', {product: product});
	}
	
	this.init();
});