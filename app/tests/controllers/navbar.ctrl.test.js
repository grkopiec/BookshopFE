describe('test suite for bookskhop application', function() {
	describe('tests for navbarController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var navbarCtrl;
		var state;
		var userSrv;
		
		beforeEach(function() {
			inject(function($controller, $state, userService) {
				navbarCtrl = $controller('navbarController');
				state = $state;
				userSrv = userService;
			});
		});
	
		it('test initializing variables', function() {
			navbarCtrl.init();
			
			expect(navbarCtrl.userService).toBeDefined();
			expect(navbarCtrl.angular).toBeDefined();
		});
		
		it('test user logout action', function() {
			var object = {};
			spyOn(state, 'go');
			navbarCtrl.logout();
			
			expect(userSrv.user).toEqual(object);
			expect(state.go).toHaveBeenCalledWith('home');
		});
	});
});