describe('test suite for bookskhop application', function() {
	describe('tests for orderSummaryController', function() {
		beforeEach(function() {
			module('bookshop');
		});

		var orderSummaryCtrl;
		var q;
		var utilSrv;
		var userSrv;
		var ordersSrv;
		var ordersFact;

		beforeEach(function() {
			inject(function($controller, $q, utilService, userService, ordersService, ordersFactory) {
				orderSummaryCtrl = $controller('orderSummaryController');
				q = $q;
				utilSrv = utilService;
				userSrv = userService;
				ordersSrv = ordersService;
				ordersFact = ordersFactory;
			});
		});

		it('test initializing variables', function() {
			expect(orderSummaryCtrl.utilService).toEqual(utilSrv);
			expect(orderSummaryCtrl.ordersService).toEqual(ordersSrv);
		});

		it('test save() method when exists userId and order is saved', function() {
			var returnValue = {
				id: 0
			};
			var order = {
				order: {
					totalPrice: returnValue.id,
					user: returnValue,
					status: 'NEW',
					paid: false
				},
				orderItems: []
			};
			
			userSrv.user.userId = 0;
			
			spyOn(ordersSrv, 'calculateTotalPrice').and.returnValue(returnValue.id);
			spyOn(ordersFact, 'save').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			orderSummaryCtrl.save();
			
			expect(ordersSrv.calculateTotalPrice).toHaveBeenCalled();
			expect(ordersFact.save).toHaveBeenCalledWith(order);
		});
	});
});
