describe('test suite for bookskhop application', function() {
	describe('tests for homeController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var homeCtrl;
		
		beforeEach(function() {
			inject(function($controller) {
				homeCtrl = $controller('homeController');
			});
		});
	});
});