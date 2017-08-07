angular.module('bookshop').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	//if user redirect to /cms show by default /categories nested state
	$urlRouterProvider.when('/cms', '/cms/categories');
	
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
		controller: 'cmsCategoriesController',
		controllerAs: 'cmsCategoriesCtrl',
		templateUrl: 'core/cms/categories/cms-categories.tpl.html'
	})
	.state('cms.products', {
		url: '/products',
		controller: 'cmsProductsController',
		controllerAs: 'cmsProductsCtrl',
		templateUrl: 'core/cms/products/cms-products-list.tpl.html',
		params: {action: 'list'}
	})
	.state('cms.productAdd', {
		url: '/product/add',
		controller: 'cmsProductsController',
		controllerAs: 'cmsProductsCtrl',
		templateUrl: 'core/cms/products/cms-product-add-edit.tpl.html',
		params: {action: 'add'}
	})
	.state('cms.productEdit', {
		url: '/product/:productId',
		controller: 'cmsProductsController',
		controllerAs: 'cmsProductsCtrl',
		templateUrl: 'core/cms/products/cms-product-add-edit.tpl.html',
		params: {action: 'edit'}
	})
	.state('otherwise', {
		redirectTo: '/'
	});
	
	$locationProvider.html5Mode(true);
});