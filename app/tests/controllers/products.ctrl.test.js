describe('test suite for bookskhop application', function() {
	describe('tests for productsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var productsCtrl;
		var categoriesFact;
		var productsFact
		
		beforeEach(function() {
			inject(function($controller, categoriesFactory, productsFactory) {
				productsCtrl = $controller('productsController');
				categoriesFact = categoriesFactory;
				productsFact = productsFactory;
			});
		});
	
		it('test initializing variables', function() {
			var returnObject = {
				property: 'value'
			};
			var object = {};
			
			spyOn(categoriesFact, 'query').and.returnValue(returnObject);
			spyOn(productsFact, 'query').and.returnValue(returnObject);
			
			productsCtrl.init();
			
			expect(categoriesFact.query).toHaveBeenCalled();
			expect(productsCtrl.categories).toEqual(returnObject);
			expect(productsFact.query).toHaveBeenCalled();
			expect(productsCtrl.products).toEqual(returnObject);
			expect(productsCtrl.activeCategory).toEqual('All categories');
			expect(productsCtrl.utilService).toBeDefined();
			expect(productsCtrl.query).toEqual(object);
		});
		
		it('test search() method', function() {
			var returnObject = {
				name: 'Book'
			};
			var object = {
				orderBy: 'name'
			};
			productsCtrl.query = object;
			
			spyOn(productsFact, 'search').and.returnValue(returnObject);
			
			productsCtrl.search();
			
			expect(productsFact.search).toHaveBeenCalledWith(object);
			expect(productsCtrl.products).toEqual(returnObject);
		});
		
		it('test searchByCategory() method when category argument has All categories value', function() {
			var category = 'All categories';
			
			spyOn(productsCtrl, 'search');
			
			productsCtrl.searchByCategory(category);
			
			expect(productsCtrl.activeCategory).toEqual(category);
			expect(productsCtrl.query.category).toBeNull();
			expect(productsCtrl.search).toHaveBeenCalled();
		});
		
		it('test searchByCategory() method when category argument has different value that All categories', function() {
			var category = 'Toys';
			
			spyOn(productsCtrl, 'search');
			
			productsCtrl.searchByCategory(category);
			
			expect(productsCtrl.activeCategory).toEqual(category);
			expect(productsCtrl.query.category).toEqual(category);
			expect(productsCtrl.search).toHaveBeenCalled();
		});
	});
});