angular.module('bookshop').controller('navbarController', function($state, userService) {
	this.init = function() {
		this.userService = userService;
		this.angular = angular;
	}
	this.init();
	
	this.logout = function() {
		userService.user = {};
		$state.go('home');
	}
});