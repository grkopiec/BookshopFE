describe('test suite for bookskhop application', function() {
	describe('tests for userOrdersController', function() {
		beforeEach(function() {
			module('bookshop');
		});

		var userOrdersCtrl;
		var q;
		var stateParams;
		var utilSrv;
		var userSrv;
		var ordersFact;

		beforeEach(function() {
			inject(function($controller, $q, $stateParams, utilService, userService, ordersFactory) {
				userOrdersCtrl = $controller('userOrdersController');
				q = $q;
				stateParams = $stateParams;
				utilSrv = utilService;
				userSrv = userService;
				ordersFact = ordersFactory;
			});
		});

		it('test initializing variables stateParams action is list', function() {
			var user = {
				userId: 0
			};

			stateParams.action = 'list';
			userSrv.user = user;

			spyOn(ordersFact, 'findForUser').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			spyOn(ordersFact, 'getItems');

			userOrdersCtrl.init();

			expect(userOrdersCtrl.$stateParams).toEqual(stateParams);
			expect(userOrdersCtrl.utilService).toEqual(utilSrv);
			expect(ordersFact.findForUser).toHaveBeenCalledWith({id: user.userId});
			expect(ordersFact.getItems).not.toHaveBeenCalled();
		});

		it('test initializing variables stateParams action is show', function() {
			var order = {
				id: 0
			};

			stateParams.action = 'show';
			stateParams.order = order;

			spyOn(ordersFact, 'getItems').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			spyOn(ordersFact, 'findForUser');

			userOrdersCtrl.init();

			expect(userOrdersCtrl.$stateParams).toEqual(stateParams);
			expect(userOrdersCtrl.utilService).toEqual(utilSrv);
			expect(userOrdersCtrl.order).toEqual(order);
			expect(ordersFact.getItems).toHaveBeenCalledWith({id: order.id});
			expect(ordersFact.findForUser).not.toHaveBeenCalled();
		});
	});
});
