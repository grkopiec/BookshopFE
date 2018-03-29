describe('test suite for bookskhop application', function() {
	describe('tests for bsValidatePrice directive', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var compile;
		var rootScope;
		var html = '<form name="form">' +
				'<input name="field" ng-model="object.price" bs-validate-price />' +
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
	
		it('test positive value of price filed when lower than zero', function() {
			rootScope.object = {price: '0,2'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test positive value of phone filed when greater than zero', function() {
			rootScope.object = {price: '1'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test negative value of field phone when too many decimal places', function() {
			rootScope.object = {price: '0,345'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
		
		it('test negative value of field phone when nothing before decimal places', function() {
			rootScope.object = {price: ',34'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
		
		it('test negative value of field phone when dot instead comma', function() {
			rootScope.object = {price: '3.34'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
	});
});