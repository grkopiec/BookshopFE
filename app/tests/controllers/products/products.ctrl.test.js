describe('test suite for bookskhop application', function() {
	describe('tests for productsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var productsCtrl;
		var state;
		var categoriesFact;
		
		beforeEach(function() {
			inject(function($controller, $state, categoriesFactory) {
				productsCtrl = $controller('productsController');
				state = $state;
				categoriesFact = categoriesFactory;
			});
		});
	
		it('test initializing variables', function() {
			var returnObject = {
				property: 'value'
			};
			var object = {};
			
			spyOn(categoriesFact, 'query').and.returnValue(returnObject);
			
			productsCtrl.init();
			
			expect(categoriesFact.query).toHaveBeenCalled();
			expect(productsCtrl.categories).toEqual(returnObject);
			expect(productsCtrl.activeCategory).toEqual('All categories');
		});

		it('test searchByCategory() method when category argument has All categories value', function() {
			var category = 'All categories';
			
			spyOn(state, 'go');
			
			productsCtrl.searchByCategory(category);
			
			expect(productsCtrl.activeCategory).toEqual(category);
			expect(state.go).toHaveBeenCalledWith('products.parent.all', {category: null});
		});
		
		it('test searchByCategory() method when category argument has different value that All categories', function() {
			var category = 'Toys';
			
			spyOn(state, 'go');
			
			productsCtrl.searchByCategory(category);
			
			expect(productsCtrl.activeCategory).toEqual(category);
			expect(state.go).toHaveBeenCalledWith('products.parent.all', {category: category});
		});
	});
});
