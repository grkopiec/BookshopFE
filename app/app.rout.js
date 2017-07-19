angular.module('bookshop').config(function($stateProvider, $locationProvider) {
	$stateProvider.state('home', {
		url: '/',
		controller: 'homeController',
		controllerAs: 'homeCtrl',
		templateUrl: 'core/home/home.tpl.html'
	})
	.state('products', {
		url: '/products',
		controller: 'productsController',
		controllerAs: 'productsCtrl',
		templateUrl: 'core/products/products.tpl.html'
	})
	.state('cms', {
		url: '/cms',
		controller: 'cmsController',
		controllerAs: 'cmsCtrl',
		templateUrl: 'core/cms/cms.tpl.html'
	})
	.state('cms.categories', {
		url: '/categories',
		templateUrl: 'core/cms/categories/cms-categories.tpl.html'
	})
	.state('cms.products', {
		url: '/products',
		templateUrl: 'core/cms/products/cms-products.tpl.html'
	});
	
	$locationProvider.html5Mode(true);
});