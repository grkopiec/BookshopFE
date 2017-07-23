angular.module('bookshop').controller('cmsProductsController', function(utilService, productsFactory) {
	this.utilService = utilService;
	this.products = productsFactory.query();
});