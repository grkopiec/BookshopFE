angular.module('bookshop').factory('categoriesFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/categories/:id', {}, {update: {method: 'PUT'}});
});
