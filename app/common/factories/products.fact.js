angular.module('bookshop').factory('productsFactory', function($resource, serverUrlValue) {
	return $resource(serverUrlValue + '/products/:id', {}, {
		update: {method: 'PUT'},
		search: {method: 'GET', params: '@query', url: serverUrlValue + '/products/search', isArray: true}
	});
});
