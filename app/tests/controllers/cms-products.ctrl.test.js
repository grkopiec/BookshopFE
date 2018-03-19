describe('test suite for bookskhop application', function() {
	describe('tests for cmsProductsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var cmsProductsCtrl;
		var q;
		var productsFact;
		var categoriesFact;
		var utilService;
		
		beforeEach(function() {
			inject(function($controller, $q, productsFactory, categoriesFactory, utilService) {
				cmsProductsCtrl = $controller('cmsProductsController');
				q = $q;
				productsFact = productsFactory;
				categoriesFact = categoriesFactory;
				utilSrv = utilService;
			});
		});
	
		it('test initializing variables when $stateParams.action has value list', function() {
			var returnObject = {
				property: 'value'
			};
			cmsProductsCtrl.$stateParams.action = 'list';
			
			spyOn(productsFact, 'query').and.returnValue(returnObject);
			
			cmsProductsCtrl.init();
			
			expect(productsFact.query).toHaveBeenCalled();
			expect(cmsProductsCtrl.products).toEqual(returnObject);
			expect(cmsProductsCtrl.utilService).toBeDefined();
		});
		
		it('test initializing variables when $stateParams.action has value add', function() {
			var emptyObject = {};
			var returnObject = {
				property: 'value'
			};
			cmsProductsCtrl.$stateParams.action = 'add';
			
			spyOn(categoriesFact, 'query').and.returnValue(returnObject);
			
			cmsProductsCtrl.init();
			
			expect(cmsProductsCtrl.product).toEqual(emptyObject);
			expect(categoriesFact.query).toHaveBeenCalled();
			expect(cmsProductsCtrl.categories).toEqual(returnObject);
			expect(cmsProductsCtrl.utilService).toBeDefined();
		});
		
		it('test initializing variables when $stateParams.action has value edit', function() {
			var returnObject = {
				property: 'value'
			};
			cmsProductsCtrl.$stateParams.action = 'edit';
			cmsProductsCtrl.$stateParams.productId = 0;
			var object = {
				id: cmsProductsCtrl.$stateParams.productId
			};
			
			spyOn(productsFact, 'get').and.callFake(function() {
		        var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			spyOn(categoriesFact, 'query').and.returnValue(returnObject);
			
			cmsProductsCtrl.init();
			
			expect(productsFact.get).toHaveBeenCalledWith(object)
			expect(categoriesFact.query).toHaveBeenCalled();
			expect(cmsProductsCtrl.categories).toEqual(returnObject);
			expect(cmsProductsCtrl.utilService).toBeDefined();
		});
		
		it('test saveOrUpdate() method when productForm is not valid', function() {
			cmsProductsCtrl.productForm = {
				$valid: false
			};
			
			spyOn(productsFact, 'update');
			spyOn(productsFact, 'save');
			
			cmsProductsCtrl.saveOrUpdate();
			
			//should not have been called two method from productsFact
			expect(productsFact.update).not.toHaveBeenCalled();
			expect(productsFact.save).not.toHaveBeenCalled();
		});
		
		it('test saveOrUpdate() method when productForm is valid and product.id is defined', function() {
			cmsProductsCtrl.productForm = {
				$valid: true
			};
			cmsProductsCtrl.product = {
				id: 0,
				price: 3.2,
				discount: 1
			};
			
			spyOn(utilSrv, 'productCommaToDot');
			spyOn(productsFact, 'update').and.callFake(function() {
		        var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			spyOn(productsFact, 'save');
			
			cmsProductsCtrl.saveOrUpdate();
			
			expect(utilSrv.productCommaToDot).toHaveBeenCalledWith(cmsProductsCtrl.product);
			//should have been called update method of productsFactory
			expect(productsFact.update).toHaveBeenCalledWith({id: cmsProductsCtrl.product.id}, cmsProductsCtrl.product);
			expect(productsFact.save).not.toHaveBeenCalled();
		});
		
		it('test saveOrUpdate() method when productForm is valid and product.id is not defined', function() {
			cmsProductsCtrl.productForm = {
				$valid: true
			};
			cmsProductsCtrl.product = {
				price: 3.2,
				discount: 1,
			};
			
			spyOn(utilSrv, 'productCommaToDot');
			spyOn(productsFact, 'update');
			spyOn(productsFact, 'save').and.callFake(function() {
				var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			
			cmsProductsCtrl.saveOrUpdate();
			
			expect(utilSrv.productCommaToDot).toHaveBeenCalledWith(cmsProductsCtrl.product);
			expect(productsFact.update).not.toHaveBeenCalled();
			//should have been called save method of productsFactory
			expect(productsFact.save).toHaveBeenCalledWith(cmsProductsCtrl.product);
		});
		
		it('test remove() method for particular productId', function() {
			var productId = 0;
			var object = {
				id: productId
			};
			
			spyOn(productsFact, 'delete').and.callFake(function() {
		        var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			
			cmsProductsCtrl.remove(object.id);
			
			expect(productsFact.delete).toHaveBeenCalledWith(object);
		});
	});
});