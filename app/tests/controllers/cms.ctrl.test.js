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
	
		it('test initializing variables', function() {
			var label = 'categories';
			cmsCtrl.init();
			
			expect(cmsCtrl.activeTab).toEqual(label);
		});
	});
});