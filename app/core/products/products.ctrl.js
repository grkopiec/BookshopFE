angular.module('bookshop').controller('productsController', function(utilService, categoriesFactory, productsFactory) {
	this.init = function() {
		this.categories = categoriesFactory.query();
		this.products = productsFactory.query();
		this.activeCategory = 'All categories';
		this.utilService = utilService;
		this.query = {};
	}
	this.init();
	
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
});