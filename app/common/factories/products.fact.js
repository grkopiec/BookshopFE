angular.module('bookshop').factory('productsFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/products/:id', {id: '@id'}, {update: {method: 'PUT'}});
});