angular.module('bookshop').factory('productsFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/bookshop/products/:id', {}, {
		update: {method: 'PUT'},
		search: {method: 'GET', params: '@query', url: serverUrlValue + '/bookshop/products/search', isArray: true}
	});
});