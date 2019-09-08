describe('test suite for bookskhop application', function() {
	describe('tests for orderDetailsController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var orderDetailsCtrl;
		var state;
		var utilSrv;
		var ordersSrv;
		var shippingPricesVal;
		
		beforeEach(function() {
			inject(function($controller, $state, utilService, ordersService, shippingPricesValue) {
				orderDetailsCtrl = $controller('orderDetailsController');
				state = $state;
				utilSrv = utilService;
				ordersSrv = ordersService;
				shippingPricesVal = shippingPricesValue;
			});
		});
	
		it('test initializing variables', function() {
			orderDetailsCtrl.init();

			expect(orderDetailsCtrl.utilService).toEqual(utilSrv);
			expect(orderDetailsCtrl.ordersService).toEqual(ordersSrv);
			expect(orderDetailsCtrl.shippingPricesValue).toEqual(shippingPricesVal);
			expect(orderDetailsCtrl.angular).toEqual(angular);
		});
		
		it('test validFormAndGoToSummary() method when detailsForm is valid and state is changing', function() {
			orderDetailsCtrl.detailsForm = {
				$valid: true,
				$setSubmitted: function() {},
				paymentMethod: {
					$setTouched: function() {}
				},
				shippingMethod: {
					$setTouched: function() {}
				}
			};
			
			spyOn(orderDetailsCtrl.detailsForm, '$setSubmitted');
			spyOn(orderDetailsCtrl.detailsForm.paymentMethod, '$setTouched');
			spyOn(orderDetailsCtrl.detailsForm.shippingMethod, '$setTouched');
			spyOn(state, 'go');
			
			orderDetailsCtrl.validFormAndGoToSummary();
			
			expect(orderDetailsCtrl.detailsForm.$setSubmitted).toHaveBeenCalled();
			expect(orderDetailsCtrl.detailsForm.paymentMethod.$setTouched).toHaveBeenCalled();
			expect(orderDetailsCtrl.detailsForm.shippingMethod.$setTouched).toHaveBeenCalled();
			expect(state.go).toHaveBeenCalledWith('make-order.order-summary');
		});
	});
});
