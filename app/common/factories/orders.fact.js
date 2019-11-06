angular.module('bookshop').factory('ordersFactory', function($resource, serverUrlValue) {
	//TODO not sure if put is required
	return $resource(serverUrlValue + '/orders/:id', {}, {
		findForUser: {method: 'GET', url: serverUrlValue + '/orders/user/:id', isArray: true},
		getItems: {method: 'GET', url: serverUrlValue + '/orders/items/:id'},
		update: {method: 'PUT'},
		changeStatus: {method: 'PATCH', url: serverUrlValue + '/orders/change-status/:id'},
		markAsPaid: {method: 'PATCH', url: serverUrlValue + '/orders/mark-as-paid/:id'}
	});
});
