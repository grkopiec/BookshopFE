describe('test suite for bookskhop application', function() {
	describe('tests for bsDifferentThan directive', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var compile;
		var rootScope;
		var html = '<form name="form">' +
				'<input name="field1" ng-model="object.field1" />' +
				'<input name="field1" ng-model="object.field2" bs-different-than="object.field1" />' + 
				'</form>';
		
		beforeEach(function() {
			inject(function($httpBackend, $compile, $rootScope) {
				httpBackend = $httpBackend;
				compile = $compile;
				rootScope = $rootScope;
				
				//when ui-router call home template return 200 respond code
				httpBackend.whenGET('core/home/home.tpl.html').respond(200);
			});
		});
	
		it('test positive compare result if one input is defferent than another', function() {
			rootScope.object = {field1: 'theSame', field2: 'other'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test negative compare result if both input fields values are the same', function() {
			rootScope.object = {field1: 'theSame', field2: 'theSame'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
	});
});