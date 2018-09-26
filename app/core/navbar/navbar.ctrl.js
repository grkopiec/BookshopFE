angular.module('bookshop').controller('navbarController', function($state, utilService, userService, ordersService) {
	this.init = function() {
		this.utilService = utilService;
		this.userService = userService;
		this.ordersService = ordersService;
		this.angular = angular;
	}
	this.init();
	
	this.logout = function() {
		userService.user = {};
		$state.go('home');
	}
});