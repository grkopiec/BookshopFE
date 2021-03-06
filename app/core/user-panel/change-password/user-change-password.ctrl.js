angular.module('bookshop').controller('userChangePasswordController', function($state, userService, usersFactory) {
	this.init = function() {
		this.newPassword = {};
	}
	this.init();
	
	this.update = function() {
		if (this.newPasswordForm.$valid) {
			usersFactory.changePassword({id: userService.user.userId}, this.newPassword).$promise.then(function() {
				$state.go('user-panel');
			});
		}
	}
});