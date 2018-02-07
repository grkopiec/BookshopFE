describe('test suite for bookskhop application', function() {
	describe('tests for utilService', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var utilSrv;
		var serverUrlVal;
		
		beforeEach(function() {
			inject(function(utilService, serverUrlValue) {
				utilSrv = utilService;
				serverUrlVal = serverUrlValue;
			});
		});
		
		it('test calculateImagePath() function', function() {
			expect(utilSrv.calculateImagePath('/bookshop/resources/image.png')).toEqual(serverUrlVal + '/bookshop/resources/image.png');
			expect(utilSrv.calculateImagePath(null)).toEqual(serverUrlVal + '/bookshop/resources/noImage.png');
		});
	
		it('test formatPrice() function', function() {
			expect(utilSrv.formatPrice(22)).toEqual('22,00 €');
			expect(utilSrv.formatPrice(22.9832)).toEqual('22,98 €');
			expect(utilSrv.formatPrice(0.02)).toEqual('0,02 €');
			expect(utilSrv.formatPrice(1)).toEqual('1,00 €');
		});
		
		it('test productDotToComma() function', function() {
			var product = {
				name: 'Pencil.xyz',
				price: 1.23,
				discount: 3.23,
			}
			utilSrv.productDotToComma(product);
			expect(product.name).toEqual('Pencil.xyz');
			expect(product.price).toEqual('1,23');
			expect(product.discount).toEqual('3,23');
		});
		
		it('test productCommaToDot() function', function() {
			var product = {
					name: 'Pencil,xyz',
					price: '1,23',
					discount: '3,23',
				}
				utilSrv.productCommaToDot(product);
				expect(product.name).toEqual('Pencil,xyz');
				expect(product.price).toEqual('1.23');
				expect(product.discount).toEqual('3.23');
		});
	});
});