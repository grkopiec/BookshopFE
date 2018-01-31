describe('test suite for bookskhop application', function() {
	describe('tests for NavbarController', function() {
		beforeEach(function() {
			module('bookshop');
		});
	
		it('test if variables are initialize',function() {
			var scope = {};
			var navbarCtrl;
			inject(function($controller) {
				navbarCtrl = $controller('navbarController', {$scope: scope});
			});
			expect(navbarCtrl.userService).toBeDefined();
			expect(navbarCtrl.angular).toBeDefined();
		});
	});
});