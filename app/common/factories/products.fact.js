angular.module('bookshop').factory('productsFactory', function($resource) {
	return $resource("http://localhost:8080/bookshop/products/:id", {id: '@id'}, {update: {method: 'PUT'}});
})