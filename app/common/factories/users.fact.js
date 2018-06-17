angular.module('bookshop').factory('usersFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/users/:id', {}, {
		update: {method: 'PUT'},
		save: {method: 'POST', url: serverUrlValue + '/bookshop/users/admin'},
		changePassword: {method: 'PATCH', url: serverUrlValue + '/bookshop/users/change-password/:id'}
	});
});