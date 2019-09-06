describe('test suite for bookskhop application', function() {
	describe('tests for userDataController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var userDataCtrl;
		var q;
		var usersFact;
		var userSrv;
		
		beforeEach(function() {
			inject(function($controller, $q, usersFactory, userService) {
				userDataCtrl = $controller('userDataController');
				q = $q;
				usersFact = usersFactory;
				userSrv = userService;
			});
		});
	
		it('test initializing variables', function() {
			userSrv.user = {
				userId: 0
			}
			
			spyOn(usersFact, 'get').and.callFake(function() {
		        var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			
			userDataCtrl.init();
			
			expect(usersFact.get).toHaveBeenCalledWith({id: userSrv.user.userId});
		});
		
		it('test update() method when userDetailsForm is not valid', function() {
			userDataCtrl.userDetailsForm = {
				$valid: false
			};
			
			spyOn(usersFact, 'update');
			
			userDataCtrl.update();
			
			expect(usersFact.update).not.toHaveBeenCalled();
		});
		
		it('test update() method when userDetailsForm is valid', function() {
			userDataCtrl.userDetailsForm = {
				$valid: true
			};
			userDataCtrl.userDetails = {
				name: 'Jan',
				surname: 'Kowalski'
			}
			userSrv.user = {
				userId: 0
			}
			
			spyOn(usersFact, 'update').and.callFake(function() {
		        var deferred = q.defer();
		        deferred.resolve('OK');
		        deferred.$promise = deferred.promise;
		        return deferred;
			});
			
			userDataCtrl.update();
			
			expect(usersFact.update).toHaveBeenCalledWith({id: userSrv.user.userId}, userDataCtrl.userDetails);
		});
	});
});