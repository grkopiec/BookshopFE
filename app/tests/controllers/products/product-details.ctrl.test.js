describe('test suite for bookskhop application', function() {
	describe('tests for productDetailsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var productDetailsCtrl;
		var stateParams = {
			product: {
				id: 0
			}
		};
		var utilSrv;
		var ordersSrv;
		var minOrderProductVal;
		var maxOrderProductVal;
		
		beforeEach(function() {
			inject(function($controller, utilService, ordersService, minOrderProductValue, maxOrderProductValue) {
				productDetailsCtrl = $controller('productDetailsController', {
					$stateParams: stateParams
				});
				utilSrv = utilService;
				ordersSrv = ordersService;
				minOrderProductVal = minOrderProductValue;
				maxOrderProductVal = maxOrderProductValue;
			});
		});
	
		it('test initializing variables', function() {
			var quantity = 1;
			
			spyOn(ordersSrv, 'countProducts').and.callFake(function() {
				return quantity;
			});
			
			productDetailsCtrl.init();

			expect(productDetailsCtrl.utilService).toEqual(utilSrv);
			expect(productDetailsCtrl.ordersService).toEqual(ordersSrv);
			expect(productDetailsCtrl.product).toEqual(stateParams.product);
			expect(ordersSrv.countProducts).toHaveBeenCalledWith(stateParams.product.id);
			expect(productDetailsCtrl.quantity).toEqual(quantity);
		});
	
		it('test incrementQuantity() when quantity in correct', function() {
			var quantity = 1;
			var product = {
				id: 0
			};
			
			productDetailsCtrl.product = product;
			productDetailsCtrl.inputQuantity = 0;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return quantity;
			});
			
			productDetailsCtrl.incrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(1);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(product, 1);
			expect(productDetailsCtrl.quantity).toEqual(quantity);
		});
		
		it('test incrementQuantity() when quantity is too low', function() {
			productDetailsCtrl.inputQuantity = -2;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');
			
			productDetailsCtrl.incrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(-1);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});
		
		it('test incrementQuantity() when quantity is too high', function() {
			productDetailsCtrl.inputQuantity = 999;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');
			
			productDetailsCtrl.incrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(1000);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test decrementQuantity() when quantity in correct', function() {
			var quantity = 1;
			var product = {
				id: 0
			};
			
			productDetailsCtrl.product = product;
			productDetailsCtrl.inputQuantity = 1;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return quantity;
			});
			
			productDetailsCtrl.decrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(0);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(product, 0);
			expect(productDetailsCtrl.quantity).toEqual(quantity);
		});
		
		it('test incrementQuantity() when quantity is too low', function() {
			productDetailsCtrl.inputQuantity = 0;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');
			
			productDetailsCtrl.decrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(-1);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});
		
		it('test incrementQuantity() when quantity is too high', function() {
			productDetailsCtrl.inputQuantity = 1001;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(ordersSrv, 'changeQuantity');
			
			productDetailsCtrl.decrementQuantity();
			
			expect(productDetailsCtrl.inputQuantity).toEqual(1000);
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).not.toHaveBeenCalled();
		});

		it('test changeQuantity() when quantity form is valid', function() {
			var quantity = 1;
			var inputQuantity = 2;
			var product = {
				id: 0
			};
			
			productDetailsCtrl.product = product;
			productDetailsCtrl.inputQuantity = inputQuantity;
			productDetailsCtrl.quantityForm = {
				$setSubmitted: function() {},
				$valid: function() {},
				quantity: {
					$setTouched: function() {}
				}
			};
			
			spyOn(productDetailsCtrl.quantityForm.quantity, '$setTouched');
			spyOn(productDetailsCtrl.quantityForm, '$setSubmitted');
			spyOn(productDetailsCtrl.quantityForm, '$valid').and.callFake(function() {
				return true;
			});
			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return quantity;
			});
			
			productDetailsCtrl.changeQuantity();
			
			expect(productDetailsCtrl.quantityForm.quantity.$setTouched).toHaveBeenCalled();
			expect(productDetailsCtrl.quantityForm.$setSubmitted).toHaveBeenCalled();
			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(product, inputQuantity);
			expect(productDetailsCtrl.quantity).toEqual(quantity);
		});

		it('test addToCart() when quantity equals to zero', function() {
			var changedQuantity = 1;
			var product = {
				id: 0
			};
			
			productDetailsCtrl.quantity = 0;
			productDetailsCtrl.product = product;

			spyOn(ordersSrv, 'changeQuantity').and.callFake(function() {
				return changedQuantity;
			});
			
			productDetailsCtrl.addToCart();

			expect(ordersSrv.changeQuantity).toHaveBeenCalledWith(product, 1);
			expect(productDetailsCtrl.quantity).toEqual(changedQuantity);
			expect(productDetailsCtrl.inputQuantity).toEqual(changedQuantity);
		});
	});
});
