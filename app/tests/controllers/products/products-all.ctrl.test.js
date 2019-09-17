describe('test suite for bookskhop application', function() {
	describe('tests for productsAllController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var productsAllCtrl;
		var state;
		var stateParams;
		var utilSrv;
		var ordersSrv;
		var productsFact;
		
		beforeEach(function() {
			inject(function($controller, $state, $stateParams, utilService, ordersService, productsFactory) {
				productsAllCtrl = $controller('productsAllController');
				state = $state;
				stateParams = $stateParams;
				utilSrv = utilService;
				ordersSrv = ordersService;
				productsFact = productsFactory;
			});
		});
	
		it('test initializing variables', function() {
			var returnValue = {
				id: 0
			};
			var category = {
				category: {
					id: 0
				}
			};
			
			stateParams.category = {
				id: 0
			};
			
			spyOn(productsFact, 'query').and.returnValue(returnValue);
			spyOn(productsAllCtrl, 'search');
			
			productsAllCtrl.init();

			expect(productsFact.query).toHaveBeenCalled();
			expect(productsAllCtrl.products).toEqual(returnValue);
			expect(productsAllCtrl.utilService).toEqual(utilSrv);
			expect(productsAllCtrl.ordersService).toEqual(ordersSrv);
			expect(productsAllCtrl.query).toEqual(category);
			expect(productsAllCtrl.search).toHaveBeenCalled();
		});

		it('test search() method where search', function() {
			var query = {
				id: 0
			};
			
			productsAllCtrl.query = query;
			
			spyOn(productsFact, 'search').and.callFake(function() {
				return query;
			});
			
			productsAllCtrl.search();

			expect(productsFact.search).toHaveBeenCalledWith(query);
			expect(productsAllCtrl.products).toEqual(query);
		});

		it('test addToCart() method when ordered equals zero', function() {
			var quantity = 1;
			var product = {
				id: 0
			};
			
			spyOn(productsAllCtrl.ordersService, 'changeQuantity').and.callFake(function() {
				return quantity;
			});
			
			var answer = productsAllCtrl.addToCart(product, 0);

			expect(productsAllCtrl.ordersService.changeQuantity).toHaveBeenCalledWith(product, quantity);
			expect(answer).toEqual(quantity);
		});

		it('test addToCart() method when ordered not equals zero', function() {
			var ordered = 1;
			
			spyOn(productsAllCtrl.ordersService, 'changeQuantity')
			
			var answer = productsAllCtrl.addToCart(null, ordered);

			expect(productsAllCtrl.ordersService.changeQuantity).not.toHaveBeenCalled();
			expect(answer).toEqual(ordered);
		});

		it('test goToProductDetails() method when change status', function() {
			var product = {
				product: {
					id: 0
				}
			};
			
			spyOn(state, 'go');
			
			productsAllCtrl.goToProductDetails(product.product);
			
			expect(state.go).toHaveBeenCalledWith('products.parent.details', product);
		});
	});
});
