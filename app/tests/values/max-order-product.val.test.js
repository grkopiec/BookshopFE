describe('test suite for bookskhop application', function() {
	describe('tests for maxOrderProductValue', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var maxOrderProductVal;
		
		beforeEach(function() {
			inject(function(maxOrderProductValue) {
				maxOrderProductVal = maxOrderProductValue;
			});
		});
	
		it('test value content',function() {
			expect(maxOrderProductVal).toBeDefined();
			expect(maxOrderProductVal).toEqual(999);
		});
	});
});
