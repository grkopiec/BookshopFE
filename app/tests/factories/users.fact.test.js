describe('test suite for bookskhop application', function() {
	describe('tests for usersFactory', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var usersFact;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function($httpBackend, usersFactory, serverUrlValue) {
				httpBackend = $httpBackend;
				usersFact = usersFactory;
				serverUrlVal = serverUrlValue;
			});
			
			//when ui-router call home template return 200 respond code
			httpBackend.whenGET('core/home/home.tpl.html').respond(200);
		});
		
		afterEach(function() {
	        httpBackend.verifyNoOutstandingExpectation();
	        httpBackend.verifyNoOutstandingRequest();
		});
	
		it('test resource get call', function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/users/0').respond(200);
			usersFact.get({id: 0});
			httpBackend.flush();
		});
		
		it('test resource query call', function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/users').respond(200);
			usersFact.query();
			httpBackend.flush();
		});
		
		it('test resource save call', function() {
			httpBackend.expectPOST(serverUrlVal + '/bookshop/users/admin', {name: 'Username'}).respond(200);
			usersFact.save({name: 'Username'});
			httpBackend.flush();
		});
		
		it('test resource delete call', function() {
			httpBackend.expectDELETE(serverUrlVal + '/bookshop/users/0').respond(200);
			usersFact.delete({id: 0});
			httpBackend.flush();
		});
		
		it('test resource update call', function() {
			httpBackend.expectPUT(serverUrlVal + '/bookshop/users/0', {name: 'Username'}).respond(200);
			usersFact.update({id: 0}, {name: 'Username'});
			httpBackend.flush();
		});
		
		it('test resource patch call', function() {
			httpBackend.expectPATCH(serverUrlVal + '/bookshop/users/change-password/0', {name: 'Username'}).respond(200);
			usersFact.changePassword({id: 0}, {name: 'Username'});
			httpBackend.flush();
		});
	});
});