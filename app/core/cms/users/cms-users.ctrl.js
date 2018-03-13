angular.module('bookshop').controller('cmsUsersController', function($state, $stateParams, usersFactory) {
	this.init = function() {
		if ($stateParams.action === 'list') {
			this.usersData = usersFactory.query();
		} else if ($stateParams.action === 'add') {
			this.userData = {};
		}
	}
	this.init();
	
	this.save = function() {
		if (this.userForm.$valid) {
			usersFactory.save(this.userData).$promise.finally(function() {
				$state.go('cms.users');
			});
		}
	}
	
	this.remove = function(userId) {
		var model = this;
		usersFactory.delete({id: userId}).$promise.then(function() {
			model.usersData = usersFactory.query();
		});
	}
});