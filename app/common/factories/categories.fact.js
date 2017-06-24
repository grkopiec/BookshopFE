angular.module('bookshop').factory('categoriesFactory', function($resource) {
	return $resource("http://localhost:8080/bookshop/categories/:id", {id: '@id'}, {update: {method: 'PUT'}});
});