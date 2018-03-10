angular.module('bookshop').controller('cmsUsersController', function($state, $stateParams, usersFactory) {
	this.init = function() {
		if ($stateParams.action === 'list') {
			this.usersData = usersFactory.query();
		} else if ($stateParams === 'add') {
			this.userData = {};
		}
	}
	this.init();
	
	this.save = function() {
		if (this.productForm.$valid) {
			usersFactory.save(this.product).$promise.finally(function() {
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