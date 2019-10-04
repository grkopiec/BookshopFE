describe('test suite for bookskhop application', function() {
	describe('tests for serverUrlValue', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function(serverUrlValue) {
				serverUrlVal = serverUrlValue;
			});
		});
	
		it('test value content',function() {
			expect(serverUrlVal).toBeDefined();
			expect(serverUrlVal).toEqual('http://localhost:8080');
		});
	});
});
