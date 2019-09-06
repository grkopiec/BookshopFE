describe('test suite for bookskhop application', function() {
	describe('tests for cmsUsersController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var cmsUsersCtrl;
		var stateParams;
		var q;
		var usersFact;
		
		beforeEach(function() {
			inject(function($controller, $stateParams, $q, usersFactory) {
				cmsUsersCtrl = $controller('cmsUsersController');
				stateParams = $stateParams;
				q = $q;
				usersFact = usersFactory;
			});
		});
	
		it('test initializing variables when $stateParams.action has value list', function() {
			var returnObject = {
				property: 'value'
			};
			stateParams.action = 'list';
			
			spyOn(usersFact, 'query').and.returnValue(returnObject);
			
			cmsUsersCtrl.init();
			
			expect(usersFact.query).toHaveBeenCalled();
			expect(cmsUsersCtrl.usersData).toEqual(returnObject);
		});
		
		it('test initializing variables when $stateParams.action has value add', function() {
			var emptyObject = {};
			stateParams.action = 'add';
			
			cmsUsersCtrl.init();
			
			expect(cmsUsersCtrl.userData).toEqual(emptyObject);
		});
		
		it('test save() method when userForm is not valid', function() {
			cmsUsersCtrl.userForm = {
				$valid: false
			};
			
			spyOn(usersFact, 'save');
			
			cmsUsersCtrl.save();
			
			//should not have been called save method of usersFactory
			expect(usersFact.save).not.toHaveBeenCalled();
		});
		
		it('test save() method when userForm is valid', function() {
			cmsUsersCtrl.userForm = {
				$valid: true
			};
			cmsUsersCtrl.userData = {
				name: "Jan",
				surname: "Kowalski",
			};
			
			spyOn(usersFact, 'save').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			cmsUsersCtrl.save();
			
			//should have been called save method of usersFactory
			expect(usersFact.save).toHaveBeenCalledWith(cmsUsersCtrl.userData);
		});
		
		it('test remove() method for particular userId', function() {
			var object = {
				id: 0
			};
			
			spyOn(usersFact, 'delete').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			cmsUsersCtrl.remove(object.id);
			
			expect(usersFact.delete).toHaveBeenCalledWith(object);
		});
	});
});