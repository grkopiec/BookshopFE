angular.module('bookshop').controller('loginController', function($http, $state, serverUrlValue) {
	this.init = function() {
		this.login = {};
	}
	this.init();
	
	this.login = function() {
		$http({
			url: serverUrlValue + '/bookshop/auth',
			method: 'POST',
			data: {
				username: this.login.username,
				password: this.login.password
			}
		}).then(function(token) {
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + token.data.token;
			$state.go('home');
		});
	}
});