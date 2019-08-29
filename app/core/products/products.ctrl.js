angular.module('bookshop').controller('productsController', function($state, categoriesFactory) {
	this.init = function() {
		this.categories = categoriesFactory.query();
		this.activeCategory = 'All categories';
	}
	
	this.searchByCategory = function(category) {
		this.activeCategory = category;
		
		//if clicked all categories then set category parameter in query to null
		if (category === 'All categories') {
			category = null;
		}
		
		$state.go('products.parent.all', {category: category});
	}
	
	this.init();
});
