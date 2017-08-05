angular.module('bookshop').controller('cmsProductsController', function($state, $stateParams, utilService, productsFactory, categoriesFactory) {
	this.init = function() {
		this.$stateParams = $stateParams;
		if (this.$stateParams.action === 'list') {
			this.products = productsFactory.query();
		} else if (this.$stateParams.action === 'add') {
			this.product = {};
			this.categories = categoriesFactory.query();
		} else if (this.$stateParams.action === 'edit') {
			var model = this;
			productsFactory.get({id: $stateParams.productId}).$promise.then(function(product) {
				utilService.productDotToComma(product);
				model.product = product;
			});
			this.categories = categoriesFactory.query();
		}
		this.utilService = utilService;
	}
	this.init();
	
	this.saveOrUpdate = function() {
		if (this.productForm.$valid) {
			utilService.productCommaToDot(this.product);
			if (angular.isDefined(this.product.id)) {
				productsFactory.update(this.product.id, this.product).$promise.finally(function() {
					$state.go('cms.products');
				});
			} else {
				productsFactory.save(this.product).$promise.finally(function() {
					$state.go('cms.products');
				});
			}
		}
	}
	this.remove = function(productId) {
		var model = this;
		productsFactory.delete({id: productId}).$promise.then(function() {
			model.products = productsFactory.query();
		});
	}
});