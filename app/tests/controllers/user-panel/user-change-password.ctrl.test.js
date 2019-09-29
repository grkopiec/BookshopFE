describe('test suite for bookskhop application', function() {
	describe('tests for userChangePasswordController', function() {
		beforeEach(function() {
			module('bookshop');
		});

		var userChangePasswordCtrl;
		var q;
		var userSrv;
		var usersFact;

		beforeEach(function() {
			inject(function($controller, $q, userService, usersFactory) {
				userChangePasswordCtrl = $controller('userChangePasswordController');
				q = $q;
				userSrv = userService;
				usersFact = usersFactory;
			});
		});

		it('test initializing variables', function() {
			userChangePasswordCtrl.init();
			
			expect(userChangePasswordCtrl.newPassword).toEqual({});
		});

		it('test update() method when password is valid', function() {
			var password = 'admin';
			var userId = {
				id: 0
			};
			
			userChangePasswordCtrl.newPasswordForm = {
				$valid: true
			};
			userChangePasswordCtrl.newPassword = password;
			userSrv.user.userId = userId;

			spyOn(usersFact, 'changePassword').and.callFake(function() {
				var deferred = q.defer();
		    	deferred.resolve('OK');
		    	deferred.$promise = deferred.promise;
		    	return deferred;
			});
			
			userChangePasswordCtrl.update();
			
			expect(usersFact.changePassword).toHaveBeenCalledWith({id: userId}, password);
		});
	});
});
