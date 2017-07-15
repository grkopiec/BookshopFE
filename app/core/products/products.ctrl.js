angular.module('bookshop').controller('productsController', function(categoriesFactory, productsFactory, serverUrlValue) {
	this.categories = categoriesFactory.query();
	this.products = productsFactory.query();
	this.search = function() {
		this.products = productsFactory.search(this.query);
	}
	this.searchByCategory = function(category) {
		this.activeCategory = category;
		
		//if clicked all categories then set category parameter in query to null
		if (category === 'All categories') {
			category = null;
		}
		
		this.query = {};
		this.query.category = category;
		this.search();
	}
	this.calculateImagePath = function(imagePath) {
		return serverUrlValue + (imagePath === null ? '/bookshop/resources/noImage.png' : imagePath);
	}
	
	this.query = {};
	this.activeCategory = 'All categories';
});