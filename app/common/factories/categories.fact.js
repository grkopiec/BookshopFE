angular.module('bookshop').factory('categoriesFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/categories/:id', {}, {update: {method: 'PUT'}});
});