angular.module('bookshop').controller('orderProductsController', function(
		utilService, ordersService, ordersService, minOrderProductValue, maxOrderProductValue) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
	}

	this.incrementQuantity = function(product, index) {
		product.inputQuantity++;
		this['quantityForm' + index].quantity.$setTouched();
		this['quantityForm' + index].$setSubmitted();
		if ((minOrderProductValue <= product.inputQuantity) && (maxOrderProductValue >= product.inputQuantity)) {
			product.quantity = this.ordersService.changeQuantity(product, product.inputQuantity);
		}
	}

	this.decrementQuantity = function(product, index) {
		product.inputQuantity--;
		this['quantityForm' + index].quantity.$setTouched();
		this['quantityForm' + index].$setSubmitted();
		if ((minOrderProductValue <= product.inputQuantity) && (maxOrderProductValue >= product.inputQuantity)) {
			product.quantity = this.ordersService.changeQuantity(product, product.inputQuantity);
		}
	}

	this.changeQuantity = function(product, index) {
		this['quantityForm' + index].quantity.$setTouched();
		this['quantityForm' + index].$setSubmitted();
		if (this['quantityForm' + index].$valid) {
			product.quantity = this.ordersService.changeQuantity(product, product.inputQuantity);
		}
	}

	this.init();
});
