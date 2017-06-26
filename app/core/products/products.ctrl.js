angular.module('bookshop').controller('productsController', function(categoriesFactory, productsFactory) {
	this.categories = categoriesFactory.query();
	this.products = productsFactory.query();
	this.calculateImagePath = function(imagePath) {
		return 'http://localhost:8080' + (imagePath === null ? '/bookshop/resources/noImage.png' : imagePath);
	}
});