describe('test suite for bookskhop application', function() {
	describe('tests for userPanelController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var userPanelCtrl;
		
		beforeEach(function() {
			inject(function($controller) {
				userPanelCtrl = $controller('userPanelController');
			});
		});
	
		it('test initializing variables', function() {
			var label = 'data';
			userPanelCtrl.init();
			
			expect(userPanelCtrl.activeTab).toEqual(label);
		});
	});
});