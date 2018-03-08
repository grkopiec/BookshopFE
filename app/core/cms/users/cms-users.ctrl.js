angular.module('bookshop').controller('cmsUsersController', function($stateParams, usersFactory) {
	this.init = function() {
		this.$stateParams = $stateParams;
		if (this.$stateParams.action === 'list') {
			this.usersData = usersFactory.query();
		} else if (this.$stateParams === 'add') {
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