angular.module('bookshop').controller('productDetailsController', function(
		$scope, $stateParams, utilService, ordersService, minOrderProductValue, maxOrderProductValue) {
	this.init = function() {
		this.utilService = utilService;
		this.ordersService = ordersService;
		this.product = $stateParams.product;
		this.quantity = ordersService.countProducts($stateParams.product.id);
		this.inputQuantity = this.quantity;
	}
	
	this.incrementQuantity = function() {
		this.inputQuantity++;
		this.quantityForm.quantity.$setTouched();
		this.quantityForm.$setSubmitted();
		if ((minOrderProductValue <= this.inputQuantity) && (maxOrderProductValue >= this.inputQuantity)) {
			this.quantity = this.ordersService.changeQuantity(this.product, this.inputQuantity);
		}
	}
	
	this.decrementQuantity = function() {
		this.inputQuantity--;
		this.quantityForm.quantity.$setTouched();
		this.quantityForm.$setSubmitted();
		if ((minOrderProductValue <= this.inputQuantity) && (maxOrderProductValue >= this.inputQuantity)) {
			this.quantity = this.ordersService.changeQuantity(this.product, this.inputQuantity);
		}
	}

	this.changeQuantity = function() {
		this.quantityForm.quantity.$setTouched();
		this.quantityForm.$setSubmitted();
		if (this.quantityForm.$valid) {
			this.quantity = this.ordersService.changeQuantity(this.product, this.inputQuantity);
		}
	}
	
	this.addToCart = function() {
		if (this.quantity === 0) {
			this.quantity = this.ordersService.changeQuantity(this.product, 1);
			this.inputQuantity = this.quantity;
		}
	}
	
	this.init();
});