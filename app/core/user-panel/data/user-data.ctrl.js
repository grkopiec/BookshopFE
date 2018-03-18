angular.module('bookshop').controller('userDataController', function(usersFactory, userService) {
	this.init = function() {
		var model = this;
		usersFactory.get({id: userService.user.userId}).$promise.then(function(userDetails) {
			model.userDetails = userDetails;
		});
	}
	this.init();
	
	this.update = function() {
		if (this.dataForm.$valid) {
			var model = this;
			usersFactory.update({id: userService.user.userId}, this.userDetails).$promise.then(function(userDetails) {
				model.userDetials = userDetails;
				model.dataForm.$setPristine();
				model.dataForm.$setUntouched();
			});
		}
	}
});