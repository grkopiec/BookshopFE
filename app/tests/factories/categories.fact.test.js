describe('test suite for bookskhop application', function() {
	describe('tests for categoriesFactory', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var categoriesFact;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function($httpBackend, categoriesFactory, serverUrlValue) {
				httpBackend = $httpBackend;
				categoriesFact = categoriesFactory;
				serverUrlVal = serverUrlValue;
			});
			
			//when ui-router call home template return 200 respond code
			httpBackend.whenGET('core/home/home.tpl.html').respond(200);
		});
		
		afterEach(function() {
	        httpBackend.verifyNoOutstandingExpectation();
	        httpBackend.verifyNoOutstandingRequest();
		});
	
		it('test resource get call',function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/categories/0').respond(200);
			categoriesFact.get({id: 0});
			httpBackend.flush();
		});
		
		it('test resource query call',function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/categories').respond(200);
			categoriesFact.query();
			httpBackend.flush();
		});
		
		it('test resource save call',function() {
			httpBackend.expectPOST(serverUrlVal + '/bookshop/categories', {name: 'Books'}).respond(200);
			categoriesFact.save({name: 'Books'});
			httpBackend.flush();
		});
		
		it('test resource delete call',function() {
			httpBackend.expectDELETE(serverUrlVal + '/bookshop/categories/0').respond(200);
			categoriesFact.delete({id: 0});
			httpBackend.flush();
		});
		
		it('test resource update call',function() {
			httpBackend.expectPUT(serverUrlVal + '/bookshop/categories/0', {name: 'Books'}).respond(200);
			categoriesFact.update({id: 0}, {name: 'Books'});
			httpBackend.flush();
		});
	});
});