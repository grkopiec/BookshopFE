angular.module('bookshop').service('userService', function() {
	this.init = function() {
		//should be separate function for it
		this.user = {};
	}
	this.init();
});
