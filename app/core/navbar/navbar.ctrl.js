angular.module('bookshop').controller('navbarController', function($location, locationService) {
	this.navClass = function(page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	};
	
	this.goHome = locationService.goHome;
	this.goProducts = locationService.goProducts;
	this.goCms = locationService.goCms;
});