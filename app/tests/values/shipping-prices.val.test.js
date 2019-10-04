describe('test suite for bookskhop application', function() {
	describe('tests for shippingPricesValue', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var shippingPricesVal;
		
		beforeEach(function() {
			inject(function(shippingPricesValue) {
				shippingPricesVal = shippingPricesValue;
			});
		});
	
		it('test value content',function() {
			expect(shippingPricesVal).toBeDefined();
			expect(shippingPricesVal).toEqual({
				POST: 2,
				COURIER: 6,
				PERSONAL_PICKUP: 0
			});
		});
	});
});
