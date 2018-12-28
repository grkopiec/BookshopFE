angular.module('bookshop').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	//TODO change state names into camel case
	//if user redirect to /cms show by default /categories nested state
	$urlRouterProvider.when('/cms', '/cms/orders');
	//if user redirect to /user-panel show by default /orders nested state
	$urlRouterProvider.when('/user-panel', '/user-panel/orders');
	$urlRouterProvider.otherwise('/');
	
	$locationProvider.html5Mode(true);
	
	$stateProvider.state('home', {
		url: '/',
		controller: 'homeController',
		controllerAs: 'homeCtrl',
		templateUrl: 'core/home/home.tpl.html'
	})
	.state('register', {
		url: '/register',
		controller: 'registerController',
		controllerAs: 'registerCtrl',
		templateUrl: 'core/register/register.tpl.html'
	})
	.state('login', {
		url: '/login',
		controller: 'loginController',
		controllerAs: 'loginCtrl',
		templateUrl: 'core/login/login.tpl.html'
	})
	.state('products', {
		url: '/products',
		controller: 'productsController',
		controllerAs: 'productsCtrl',
		templateUrl: 'core/products/products.tpl.html',
		redirectTo: 'products.parent.all'
	})
	.state('products.parent', {
		templateUrl: 'core/products/parent/parent.tpl.html',
		abstract: true
	})
	.state('products.parent.all', {
		url: '/',
		params: {category: null},
		views: {
			'productsAll': {
				controller: 'productsAllController',
				controllerAs: 'productsAllCtrl',
				templateUrl: 'core/products/parent/all/products-all.tpl.html'
			}
		}
	})
	.state('products.parent.details', {
		url: '/details',
		params: {product: null},
		views: {
			'productDetails': {
				controller: 'productDetailsController',
				controllerAs: 'productDetailsCtrl',
				templateUrl: 'core/products/parent/product-details/product-details.tpl.html'
			}
		}
	})
	.state('user-panel', {
		url: '/user-panel',
		controller: 'userPanelController',
		controllerAs: 'userPanelCtrl',
		templateUrl: 'core/user-panel/user-panel.tpl.html'
	})
	.state('user-panel.orders', {
		url: '/orders',
		controller: 'userOrdersController',
		controllerAs: 'userOrdersCtrl',
		templateUrl: 'core/user-panel/orders/user-orders.tpl.html',
		params: {action: 'list'}
	})
	.state('user-panel.order-details', {
		url: '/order-details',
		controller: 'userOrdersController',
		controllerAs: 'userOrdersCtrl',
		templateUrl: 'core/user-panel/orders/user-order-details.tpl.html',
		params: {action: 'show', order: null}
	})
	.state('user-panel.data', {
		url: '/data',
		controller: 'userDataController',
		controllerAs: 'userDataCtrl',
		templateUrl: 'core/user-panel/data/user-data.tpl.html'
	})
	.state('user-panel.change-password', {
		url: '/change-password',
		controller: 'userChangePasswordController',
		controllerAs: 'userChangePasswordCtrl',
		templateUrl: 'core/user-panel/change-password/user-change-password.tpl.html'
	})
	.state('make-order', {
		url: '/make-order',
		templateUrl: 'core/make-order/make-order.tpl.html',
		abstract: true
	})
	.state('make-order.products-list', {
		url: '/products-list',
		views: {
			'productsList': {
				controller: 'orderProductsController',
				controllerAs: 'orderProductsCtrl',
				templateUrl: 'core/make-order/products-list/products-list.tpl.html'
			}
		}
	})
	.state('make-order.order-details', {
		url: '/order-details',
		views: {
			'orderDetails': {
				controller: 'orderDetailsController',
				controllerAs: 'orderDetailsCtrl',
				templateUrl: 'core/make-order/order-details/order-details.tpl.html'
			}
		}
	})
	.state('make-order.order-summary', {
		url: '/order-summary',
		views: {
			'orderSummary': {
				controller: 'orderSummaryController',
				controllerAs: 'orderSummaryCtrl',
				templateUrl: 'core/make-order/order-summary/order-summary.tpl.html'
			}
		}
	})
	.state('cms', {
		url: '/cms',
		controller: 'cmsController',
		controllerAs: 'cmsCtrl',
		templateUrl: 'core/cms/cms.tpl.html'
	})
	.state('cms.orders', {
		url: '/orders',
		controller: 'cmsOrdersController',
		controllerAs: 'cmsOrdersCtrl',
		templateUrl: 'core/cms/orders/cms-orders.tpl.html',
		params: {action: 'list'}
	})
	.state('cms.order-details', {
		url: '/orders/:orderId',
		controller: 'cmsOrdersController',
		controllerAs: 'cmsOrdersCtrl',
		templateUrl: 'core/cms/orders/cms-order-details.tpl.html',
		params: {action: 'edit', order: null}
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
	//TODO should be products in url
	.state('cms.productAdd', {
		url: '/product/add',
		controller: 'cmsProductsController',
		controllerAs: 'cmsProductsCtrl',
		templateUrl: 'core/cms/products/cms-product-add-edit.tpl.html',
		params: {action: 'add'}
	})
	//TODO should be products in url
	.state('cms.productEdit', {
		url: '/product/:productId',
		controller: 'cmsProductsController',
		controllerAs: 'cmsProductsCtrl',
		templateUrl: 'core/cms/products/cms-product-add-edit.tpl.html',
		params: {action: 'edit'}
	})
	.state('cms.users', {
		url: '/users',
		controller: 'cmsUsersController',
		controllerAs: 'cmsUsersCtrl',
		templateUrl: 'core/cms/users/cms-users-list.tpl.html',
		params: {action: 'list'}
	})
	.state('cms.userAdd', {
		url: '/users/add',
		controller: 'cmsUsersController',
		controllerAs: 'cmsUsersCtrl',
		templateUrl: 'core/cms/users/cms-user-add.tpl.html',
		params: {action: 'add'}
	});
});
