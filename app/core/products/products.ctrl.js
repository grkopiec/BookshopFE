angular.module('bookshop').controller('productsController', function(productsFactory) {
	this.products = productsFactory.query();
});