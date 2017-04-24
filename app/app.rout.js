angular.module('bookshop').config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'homeController',
		controllerAs: 'homeCtrl',
		templateUrl: 'core/home/home.tpl.html'
	})
	.when('/products', {
		controller: 'productsController',
		controllerAs: 'productsCtrl',
		templateUrl: 'core/products/products.tpl.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});