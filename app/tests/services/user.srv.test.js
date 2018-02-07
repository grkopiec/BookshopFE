describe('test suite for bookskhop application', function() {
	describe('tests for utilService', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var userSrv;
		
		beforeEach(function() {
			inject(function(userService) {
				userSrv = userService;
			});
		});
	
		it('test start value', function() {
			expect(userSrv.user).toEqual({});
		});
		
		it('test initialize property', function() {
			var object = {
				property: 'value'
			}
			userSrv.user = object;
			expect(userSrv.user).toEqual(object);
		});
	});
});