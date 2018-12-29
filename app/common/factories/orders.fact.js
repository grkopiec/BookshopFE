angular.module('bookshop').factory('ordersFactory', function($resource, serverUrlValue) {
	//TODO not sure if put is required
	return $resource(serverUrlValue + '/bookshop/orders/:id', {}, {
		findForUser: {method: 'GET', url: serverUrlValue + '/bookshop/orders/user/:id', isArray: true},
		getItems: {method: 'GET', url: serverUrlValue + '/bookshop/orders/items/:id'},
		update: {method: 'PUT'},
		changeStatus: {method: 'PATCH', url: serverUrlValue + '/bookshop/orders/change-status/:id'}
	});
});