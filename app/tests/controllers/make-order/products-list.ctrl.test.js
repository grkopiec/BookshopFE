describe('test suite for bookskhop application', function() {
	describe('tests for orderProductsController', function() {
		beforeEach(function() {
			module('bookshop');
		});

		var orderProductsCtrl;
		var q;
		var utilSrv;
		var ordersSrv;

		beforeEach(function() {
			inject(function($controller, $q, utilService, ordersService) {
				orderProductsCtrl = $controller('orderProductsController');
				q = $q;
				utilSrv = utilService;
				ordersSrv = ordersService;
			});
		});

		it('test initializing variables', function() {
			expect(orderProductsCtrl.utilService).toEqual(utilSrv);
			expect(orderProductsCtrl.ordersService).toEqual(ordersSrv);
		});

		it('test incrementQuantity() method when quantity is correct', function() {
			var index = 0;
			var product = {
				inputQuantity: 0
			};
			var updatedProduct = {
				inputQuantity: 1,
				quantity: 1
			}
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return 1;
			});

			orderProductsCtrl.incrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(updatedProduct, updatedProduct.inputQuantity);
		});

		it('test incrementQuantity() method when quantity is too low', function() {
			var index = 0;
			var product = {
				inputQuantity: -2
			};
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');

			orderProductsCtrl.incrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test incrementQuantity() method when quantity is too high', function() {
			var index = 0;
			var product = {
				inputQuantity: 999
			};
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');

			orderProductsCtrl.incrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test decrementQuantity() method when quantity is correct', function() {
			var index = 0;
			var product = {
				inputQuantity: 1
			};
			var updatedProduct = {
				inputQuantity: 0,
				quantity: 0
			}
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return 0;
			});

			orderProductsCtrl.decrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(updatedProduct, updatedProduct.inputQuantity);
		});

		it('test decrementQuantity() method when quantity is too low', function() {
			var index = 0;
			var product = {
				inputQuantity: 0
			};
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');

			orderProductsCtrl.decrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test decrementQuantity() method when quantity is too high', function() {
			var index = 0;
			var product = {
				inputQuantity: 1001
			};
			orderProductsCtrl['quantityForm' + index] = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');

			orderProductsCtrl.decrementQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test changeQuantity() method when form is correct', function() {
			var index = 0;
			var product = {
				inputQuantity: 0
			};
			var updatedProduct = {
				inputQuantity: 0,
				quantity: 1
			}
			orderProductsCtrl['quantityForm' + index] = {
				$valid: true,
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};

			spyOn(orderProductsCtrl['quantityForm' + index].quantity, '$setTouched');
			spyOn(orderProductsCtrl['quantityForm' + index], '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return 1;
			});

			orderProductsCtrl.changeQuantity(product, index);

			expect(orderProductsCtrl['quantityForm' + index].quantity.$setTouched).toHaveBeenCalled();
			expect(orderProductsCtrl['quantityForm' + index].$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(updatedProduct, updatedProduct.inputQuantity);
		});
	});
});
