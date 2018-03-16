angular.module('bookshop').controller('userDataController', function(usersFactory, userService) {
	this.init = function() {
		this.userData = {};
		var model = this;
		usersFactory.get({id: userService.id}).$promise.then(function(userData) {
			model.userData = userData;
		});
	}
	this.init();
	
	this.update = function() {
		if (this.dataForm.$valid) {
			usersFactory.update(userService.id, this.userData);
		}
	}
});