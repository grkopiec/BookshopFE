angular.module('bookshop').controller('cmsUsersController', function($stateParams, usersFactory) {
	this.init = function() {
		if ($stateParams.action === 'list') {
			this.usersData = usersFactory.query();
		} else if ($stateParams === 'add') {
			this.userData = {};
		}
	}
	this.init();
	
	this.save = function() {
		
	}
	
	this.remove = function(userId) {
		var model = this;
		usersFactory.delete({id: userId}).$promise.then(function() {
			model.usersData = usersFactory.query();
		});
	}
});