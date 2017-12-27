angular.module('bookshop').service('userService', function($filter, serverUrlValue) {
	this.init = function() {
		this.user = {};
	}
	this.init();
});
