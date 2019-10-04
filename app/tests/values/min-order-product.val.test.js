describe('test suite for bookskhop application', function() {
	describe('tests for minOrderProductValue', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var minOrderProductVal;
		
		beforeEach(function() {
			inject(function(minOrderProductValue) {
				minOrderProductVal = minOrderProductValue;
			});
		});
	
		it('test value content',function() {
			expect(minOrderProductVal).toBeDefined();
			expect(minOrderProductVal).toEqual(0);
		});
	});
});
