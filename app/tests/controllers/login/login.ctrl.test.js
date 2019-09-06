describe('test suite for bookskhop application', function() {
	describe('tests for loginController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var loginCtrl;
		var httpBackend;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function($controller, $httpBackend, serverUrlValue) {
				loginCtrl = $controller('loginController');
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
			
			loginCtrl.init();
			
			expect(loginCtrl.loginData).toEqual(object);
			httpBackend.flush();
		});
		
		it('test login() method', function() {
			var object = {
				token: 'xyz'
			}
			httpBackend.expectPOST(serverUrlVal + '/bookshop/auth/login').respond(200, object);
			
			loginCtrl.login();
			httpBackend.flush();
		});
	});
});