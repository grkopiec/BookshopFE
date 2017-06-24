angular.module('bookshop').controller('productsController', function(categoriesFactory, productsFactory) {
	this.categories = categoriesFactory.query();
	this.products = productsFactory.query();
});