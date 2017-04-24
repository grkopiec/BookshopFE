angular.module('bookshop').controller('homeController', function($scope, locationService) {
	this.goProducts = locationService.goProducts;
});