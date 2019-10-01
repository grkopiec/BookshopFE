describe('test suite for bookskhop application', function() {
	describe('tests for ordersFactory', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var httpBackend;
		var ordersFact;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function($httpBackend, ordersFactory, serverUrlValue) {
				httpBackend = $httpBackend;
				ordersFact = ordersFactory;
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
			httpBackend.expectGET(serverUrlVal + '/bookshop/orders/0').respond(200);
			ordersFact.get({id: 0});
			httpBackend.flush();
		});
		
		it('test resource query call', function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/orders').respond(200);
			ordersFact.query();
			httpBackend.flush();
		});
		
		it('test resource save call', function() {
			httpBackend.expectPOST(serverUrlVal + '/bookshop/orders', {status: 'NEW'}).respond(200);
			ordersFact.save({status: 'NEW'});
			httpBackend.flush();
		});
		
		it('test resource delete call', function() {
			httpBackend.expectDELETE(serverUrlVal + '/bookshop/orders/0').respond(200);
			ordersFact.delete({id: 0});
			httpBackend.flush();
		});
	
		it('test resource findForUser call', function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/orders/user/0').respond(200);
			ordersFact.findForUser({id: 0});
			httpBackend.flush();
		});
	
		it('test resource getItems call', function() {
			httpBackend.expectGET(serverUrlVal + '/bookshop/orders/items/0').respond(200);
			ordersFact.getItems({id: 0});
			httpBackend.flush();
		});
		
		it('test resource update call', function() {
			httpBackend.expectPUT(serverUrlVal + '/bookshop/orders/0', {status: 'PREPARING'}).respond(200);
			ordersFact.update({id: 0}, {status: 'PREPARING'});
			httpBackend.flush();
		});
		
		it('test resource changeStatus call', function() {
			httpBackend.expectPATCH(serverUrlVal + '/bookshop/orders/change-status/0', {status: 'PREPARING'}).respond(200);
			ordersFact.changeStatus({id: 0}, {status: 'PREPARING'});
			httpBackend.flush();
		});
		
		it('test resource markAsPaid call', function() {
			httpBackend.expectPATCH(serverUrlVal + '/bookshop/orders/mark-as-paid/0', {}).respond(200);
			ordersFact.markAsPaid({id: 0}, {});
			httpBackend.flush();
		});
	});
});