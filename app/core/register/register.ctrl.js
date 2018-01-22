angular.module('bookshop').controller('registerController', function($http, $state, userService, serverUrlValue) {
	this.init = function() {
		this.registerData = {};
	}
	this.init();
	
	this.register = function() {
		$http({
			url: serverUrlValue + '/bookshop/auth/register',
			method: 'POST',
			data: {
				username: this.registerData.username,
				password: this.registerData.password
			}
		}).then(function(token) {
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + token.data.token;
			userService.user = token.data;
			$state.go('home');
		});
	}
});