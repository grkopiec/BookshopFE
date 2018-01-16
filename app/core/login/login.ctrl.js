angular.module('bookshop').controller('loginController', function($http, $state, serverUrlValue) {
	this.init = function() {
		this.loginData = {};
	}
	this.init();
	
	this.login = function() {
		$http({
			url: serverUrlValue + '/bookshop/auth/login',
			method: 'POST',
			data: {
				username: this.loginData.username,
				password: this.loginData.password
			}
		}).then(function(token) {
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + token.data.token;
			$state.go('home');
		});
	}
});