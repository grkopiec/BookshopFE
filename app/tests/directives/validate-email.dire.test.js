describe('test suite for bookskhop application', function() {
	describe('tests for bsValidateEmail directive', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var compile;
		var rootScope;
		var html = '<form name="form">' +
				'<input name="field" ng-model="object.email" bs-validate-email />' +
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
	
		it('test positive value of email filed', function() {
			rootScope.object = {email: 'name@host.exten'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test negative value of field email when no host', function() {
			rootScope.object = {email: 'name@.exten'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
		
		it('test negative value of field email when too long extension', function() {
			rootScope.object = {email: 'name@host.extension'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
	});
});