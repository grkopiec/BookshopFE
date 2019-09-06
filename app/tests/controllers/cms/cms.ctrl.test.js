describe('test suite for bookskhop application', function() {
	describe('tests for cmsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var cmsCtrl;
		
		beforeEach(function() {
			inject(function($controller) {
				cmsCtrl = $controller('cmsController');
			});
		});
	});
});
