describe('test suite for bookskhop application', function() {
	describe('tests for bsValidatePhone directive', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var compile;
		var rootScope;
		var html = '<form name="form">' +
				'<input name="field" ng-model="object.phone" bs-validate-phone />' +
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
	
		it('test positive value of phone filed when full phone number', function() {
			rootScope.object = {phone: '+48 342-423-531'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test positive value of phone filed when not full phone number', function() {
			rootScope.object = {phone: '872947294'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeTruthy();
		});
		
		it('test negative value of field phone when before number hyphen', function() {
			rootScope.object = {phone: '-837-094-873'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
		
		it('test negative value of field phone when too short number', function() {
			rootScope.object = {email: '+48 28943928'}
			var element = angular.element(html);
			compile(element)(rootScope);
			rootScope.$digest();
			expect(rootScope.form.$valid).toBeFalsy();
		});
	});
});