angular.module('bookshop').controller('productsController', function(categoriesFactory, productsFactory, serverUrlValue) {
	this.categories = categoriesFactory.query();
	this.products = productsFactory.query();
	this.calculateImagePath = function(imagePath) {
		return serverUrlValue + (imagePath === null ? '/bookshop/resources/noImage.png' : imagePath);
	}
});