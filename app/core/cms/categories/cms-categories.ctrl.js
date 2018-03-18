angular.module('bookshop').controller('cmsCategoriesController', function(categoriesFactory) {
	this.init = function() {
		this.categories = categoriesFactory.query();
		this.tempCategory = {
			name: ''
		};
		this.action = null;
	}
	this.init();
	
	this.addOrEdit = function(index) {
		if (angular.isUndefined(this.categoryForm)) {
			if (angular.isDefined(index)) {
				this.categories[index].action = 'edit';
				this.tempCategory.name = this.categories[index].name;
			} else {
				this.action = 'add';
			}
		}
	}
	this.cancelAddOrEdit = function(index) {
		this.tempCategory.name = '';
		if (angular.isDefined(index)) {
			this.categories[index].action = undefined;
		} else {
			this.action = null;
		}
	}
	this.saveOrUpdate = function(index) {
		if (this.categoryForm.$valid) {
			var model = this;
			if (angular.isDefined(index)) {
				model.categories[index].name = model.tempCategory.name;
				categoriesFactory.update({id: model.categories[index].id}, model.categories[index]).$promise.finally(function() {
					model.categories = categoriesFactory.query();
				});
			} else {
				categoriesFactory.save(model.tempCategory).$promise.finally(function() {
					model.categories = categoriesFactory.query();
					model.cancelAddOrEdit();
				});
			}
		}
	}
	this.remove = function(categoryId) {
		var model = this;
		categoriesFactory.delete({id: categoryId}).$promise.then(function() {
			model.categories = categoriesFactory.query();
		});
	}
});