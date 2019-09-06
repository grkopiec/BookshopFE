describe('test suite for bookskhop application', function() {
	describe('tests for registerController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var registerCtrl;
		var httpBackend;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function($controller, $httpBackend, serverUrlValue) {
				registerCtrl = $controller('registerController');
				httpBackend = $httpBackend;
				serverUrlVal = serverUrlValue;
			});
			
			//when ui-router call home template return 200 respond code
			httpBackend.whenGET('core/home/home.tpl.html').respond(200);
		});
		
		afterEach(function() {
	        httpBackend.verifyNoOutstandingExpectation();
	        httpBackend.verifyNoOutstandingRequest();
		});
	
		it('test initializing variables', function() {
			var object = {};
			
			registerCtrl.init();
			
			expect(registerCtrl.userData).toEqual(object);
			httpBackend.flush();
		});
		
		it('test register() method', function() {
			var object = {
				token: 'xyz'
			}
			httpBackend.expectPOST(serverUrlVal + '/bookshop/auth/register').respond(200, object);
			
			registerCtrl.register();
			httpBackend.flush();
		});
	});
});