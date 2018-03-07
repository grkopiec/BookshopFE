angular.module('bookshop').controller('cmsUsersController', function($stateParams) {
	this.init = function() {
		this.$stateParams = $stateParams;
		if (this.$stateParams.action === 'list') {
			this.usersData = [{
				user: {
					username: "username"
				},
				userDetails: {
					name: "name",
					surname: "surname"
				}
			}]
		}
	}
	this.init();
});