angular.module('bookshop').service('utilService', function($filter, serverUrlValue) {
	this.calculateImagePath = function(imagePath) {
		return serverUrlValue + (imagePath === null ? '/images/noImage.png' : imagePath);
	}
	this.formatPrice = function(value) {
		var number = $filter('number')(value, 2);
		return number.toString().replace('.', ',') + ' €';
	}
	this.productDotToComma = function(product) {
		product.price = product.price.toString().replace('.', ',');
		product.discount = product.discount.toString().replace('.', ',');
	}
	this.productCommaToDot = function(product) {
		product.price = product.price.toString().replace(',', '.');
		product.discount = product.discount.toString().replace(',', '.');
	}
});
