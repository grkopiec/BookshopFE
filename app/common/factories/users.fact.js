angular.module('bookshop').factory('usersFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/users/:id', {}, {
		save: {method: 'POST', url: serverUrlValue + '/users/admin'},
		update: {method: 'PUT'},
		changePassword: {method: 'PATCH', url: serverUrlValue + '/users/change-password/:id'}
	});
});
