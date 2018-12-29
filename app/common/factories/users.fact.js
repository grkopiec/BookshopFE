angular.module('bookshop').factory('usersFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/users/:id', {}, {
		save: {method: 'POST', url: serverUrlValue + '/bookshop/users/admin'},
		update: {method: 'PUT'},
		changePassword: {method: 'PATCH', url: serverUrlValue + '/bookshop/users/change-password/:id'}
	});
});