angular.module('bookshop').factory('ordersFactory', function($resource, serverUrlValue) {
	//not sure if put is required
	return $resource(serverUrlValue + '/bookshop/orders/:id', {}, {update: {method: 'PUT'}});
});