angular.module('bookshop').factory('usersFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/users/:id', {id: '@id'}, {update: {method: 'PUT'}});
});