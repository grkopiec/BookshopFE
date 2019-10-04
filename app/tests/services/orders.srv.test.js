describe('test suite for bookskhop application', function() {
	describe('tests for ordersService', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var ordersSrv;
		var shippingPricesVal;
		
		beforeEach(function() {
			inject(function(ordersService, shippingPricesValue) {
				ordersSrv = ordersService;
				shippingPricesVal = shippingPricesValue;
			});
		});
		
		it('test initializing variables', function() {
			var object = {
				name: ''
			};
			var returnObject = {
				property: 'value'
			};
			
			spyOn(ordersSrv, 'clear');
			
			ordersSrv.init();
			
			expect(ordersSrv.shippingPricesValue).toEqual(shippingPricesVal);
			expect(ordersSrv.angular).toEqual(angular);
			expect(ordersSrv.clear).toHaveBeenCalled();
		});
		
		it('test clear function and check created object', function() {
			var order = {
				order: {
					status: 'NEW',
					paid: false
				},
				orderItems: []
			};
			
			ordersSrv.clear();
			
			expect(ordersSrv.order).toEqual(order);
		});
		
		it('test changeQuantity function when not found items and quantity is zero', function() {
			var product = {
				id: 0
			};
			var order = {
				orderItems: []
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.changeQuantity(product, 0);
			
			expect(answer).toEqual(0);
		});
		
		it('test changeQuantity function when not found items and quantity not zero', function() {
			var quantity = 1;
			var product = {
				id: 0,
				name: 'book',
				price: 12,
				imagePath: 'src/image.jpg'
			};
			var orderItem = {
				productId: product.id,
				name: product.name,
				price: product.price,
				quantity: quantity,
				imagePath: product.imagePath
			};
			var order = {
				orderItems: []
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.changeQuantity(product, quantity);
			
			expect(ordersSrv.order.orderItems).toEqual([orderItem]);
			expect(answer).toEqual(quantity);
		});
		
		it('test changeQuantity function when found items and quantity is zero', function() {
			var product = {
				id: 0
			};
			var order = {
				orderItems: [{
					id: 0
				}]
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.changeQuantity(product, 0);
			
			expect(ordersSrv.order.orderItems).toEqual([]);
			expect(answer).toEqual(0);
		});
		
		it('test changeQuantity function when found items and quantity is not zero', function() {
			var quantity = 1;
			var product = {
				id: 0
			};
			var order = {
				orderItems: [{
					id: 0
				}]
			};
			var createdOrderItem = {
				id: order.orderItems[0].id,
				quantity: quantity
			}
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.changeQuantity(product, quantity);
			
			expect(ordersSrv.order.orderItems).toEqual([createdOrderItem]);
			expect(answer).toEqual(quantity);
		});
		
		it('test countProducts function when not found items', function() {
			var order = {
				orderItems: []
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.countProducts(0);
			
			expect(answer).toEqual(0);
		});
		
		it('test countProducts function when found items', function() {
			var productId = 0;
			var quantity = 1;
			var order = {
				orderItems: [{
					id: 0,
					quantity: quantity
				}]
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.countProducts(productId);
			
			expect(answer).toEqual(quantity);
		});
		
		it('test countAllProducts function when counted items', function() {
			var quantity0 = 1;
			var quantity1 = 1;
			var quantitySum = quantity0 + quantity1;
			var order = {
				orderItems: [{
					id: 0,
					quantity: quantity0
				}, {
					id: 1,
					quantity: quantity1
				}]
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.countAllProducts();
			
			expect(answer).toEqual(quantitySum);
		});
		
		it('test calculateProductsPrice function when calculated price', function() {
			var price = 1;
			var quantity = 2;
			var totalPrice = price * quantity;
			var order = {
				orderItems: [{
					id: 0,
					quantity: quantity,
					price: price
				}]
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.calculateProductsPrice();
			
			expect(answer).toEqual(totalPrice);
		});
		
		it('test calculateItemsProductsPrice function when calculated price', function() {
			var price = 1;
			var quantity = 2;
			var totalPrice = price * quantity;
			var orderItems = [{
				id: 0,
				quantity: quantity,
				price: price
			}];
			
			var answer = ordersSrv.calculateItemsProductsPrice(orderItems);
			
			expect(answer).toEqual(totalPrice);
		});
		
		it('test calculateShippingPrice function when order is prepared', function() {
			var order = {
				order: {
					shippingMethod: 'POST'
				}
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.calculateShippingPrice();
			
			expect(answer).toEqual(2);
		});
		
		it('test calculateShippingPrice function when order is empty', function() {
			var order = {
				order: {}
			};
			
			ordersSrv.order = order;
			
			var answer = ordersSrv.calculateShippingPrice();
			
			expect(answer).toEqual(0);
		});
		
		it('test calculateTotalPrice function calculated total price', function() {
			var productPrice = 1;
			var shippingPrice = 2;
			var totalPrice = productPrice + shippingPrice;
			
			spyOn(ordersSrv, 'calculateProductsPrice').and.returnValue(productPrice);
			spyOn(ordersSrv, 'calculateShippingPrice').and.returnValue(shippingPrice);
			
			var answer = ordersSrv.calculateTotalPrice();
			
			expect(answer).toEqual(totalPrice);
		});
	});
});