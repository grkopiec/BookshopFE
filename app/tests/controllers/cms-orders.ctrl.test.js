describe('test suite for bookskhop application', function() {
	describe('tests for cmsOrdersController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var cmsOrdersCtrl;
		var q;
		var stateParams;
		var utilSrv;
		var ordersFact;
		
		beforeEach(function() {
			inject(function($controller, $q, $stateParams, utilService, ordersFactory) {
				cmsOrdersCtrl = $controller('cmsOrdersController');
				q = $q;
				stateParams = $stateParams;
				utilSrv = utilService;
				ordersFact = ordersFactory;
			});
		});
		
		it('test initializing variables when stateParams actions is list', function() {
			var returnValue = {
				property: 'value'
			};
			
			stateParams.action = 'list';
			
			spyOn(ordersFact, 'query').and.returnValue(returnValue);
			
			cmsOrdersCtrl.init();
			
			expect(cmsOrdersCtrl.$stateParams).toEqual(stateParams);
			expect(cmsOrdersCtrl.utilService).toEqual(utilSrv);
			expect(ordersFact.query).toHaveBeenCalled();
			expect(cmsOrdersCtrl.orders).toEqual(returnValue)
		});
		
		it('test initializing variables when stateParams actions is edit', function() {
			var object = {
				id: 0
			};
			var parameter = {
				id: object.id
			}
			
			stateParams.action = 'edit';
			stateParams.order = object;
			
			spyOn(ordersFact, 'getItems').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			cmsOrdersCtrl.init();
			
			expect(cmsOrdersCtrl.$stateParams).toEqual(stateParams);
			expect(cmsOrdersCtrl.utilService).toEqual(utilSrv);
			expect(cmsOrdersCtrl.order).toEqual(object);
			expect(ordersFact.getItems).toHaveBeenCalledWith(parameter);
		});
		
		it('test changeStatus() method', function() {
			var orderStatus = 'PREPARING';
			var object = {
				id: 0
			};
			var parameter0 = {
				id: object.id
			};
			var parameter1 = {
				orderStatus: orderStatus
			};
			
			cmsOrdersCtrl.order = object;
			
			spyOn(ordersFact, 'changeStatus').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			cmsOrdersCtrl.changeStatus(orderStatus);
			
			expect(ordersFact.changeStatus).toHaveBeenCalledWith(parameter0, parameter1);
		});
		
		it('test markAsPaid() method', function() {
			var object = {
				id: 0
			};
			var parameter0 = {
				id: object.id
			};
			
			cmsOrdersCtrl.order = object;
			
			spyOn(ordersFact, 'markAsPaid').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			cmsOrdersCtrl.markAsPaid();
			
			expect(ordersFact.markAsPaid).toHaveBeenCalledWith(parameter0, {});
		});
	});
});
