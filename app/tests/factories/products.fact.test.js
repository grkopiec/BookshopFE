describe('test suite for bookskhop application', function() {
	describe('tests for productsFactory', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var productsFact;
		var serverUrlValue;
		
		beforeEach(function() {
			inject(function($httpBackend, productsFactory, serverUrlValue) {
				httpBackend = $httpBackend;
				productsFact = productsFactory;
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
			httpBackend.expectGET(serverUrlVal + '/bookshop/products/0').respond(200);
			productsFact.get({id: 0});
			httpBackend.flush();
		});
		
		it('test resource query call',function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/products').respond(200);
			productsFact.query();
			httpBackend.flush();
		});
		
		it('test resource save call',function() {
			httpBackend.expectPOST(serverUrlVal + '/bookshop/products', {name: 'Pencil'}).respond(200);
			productsFact.save({name: 'Pencil'});
			httpBackend.flush();
		});
		
		it('test resource delete call',function() {
			httpBackend.expectDELETE(serverUrlVal + '/bookshop/products/0').respond(200);
			productsFact.delete({id: 0});
			httpBackend.flush();
		});
		
		it('test resource update call',function() {
			httpBackend.expectPUT(serverUrlVal + '/bookshop/products/0', {name: 'Pencil'}).respond(200);
			productsFact.update({id: 0}, {name: 'Pencil'});
			httpBackend.flush();
		});
	});
});