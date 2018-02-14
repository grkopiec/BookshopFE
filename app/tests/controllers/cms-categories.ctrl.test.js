describe('test suite for bookskhop application', function() {
	describe('tests for cmsCategoriesController', function() {
		beforeEach(function() {
			module('bookshop');
		});
		
		var cmsCategoriesCtrl;
		var categoriesFact;
		
		beforeEach(function() {
			inject(function($controller, categoriesFactory) {
				cmsCategoriesCtrl = $controller('cmsCategoriesController');
				categoriesFact = categoriesFactory;
			});
		});
	
		it('test initializing variables', function() {
			var object = {
				name: ''
			};
			var returnObject = {
				property: 'value'
			};
			spyOn(categoriesFact, 'query').and.returnValue(returnObject);
			cmsCategoriesCtrl.init();
			
			expect(categoriesFact.query).toHaveBeenCalled();
			expect(cmsCategoriesCtrl.categories).toEqual(returnObject);
			expect(cmsCategoriesCtrl.tempCategory).toEqual(object);
			expect(cmsCategoriesCtrl.action).toBeNull();
		});
		
		it('test addOrEdit() method when categoryForm is defined', function() {
			var action = cmsCategoriesCtrl.action;
			expect(action).toBeNull();
			
			cmsCategoriesCtrl.categoryForm = {};
			cmsCategoriesCtrl.addOrEdit();
			
			//if categoryForm is defined should not change action variable
			expect(cmsCategoriesCtrl.action).toEqual(action);
		});
		
		it('test addOrEdit() method when categoryForm is undefined and no index passed as parameter', function() {
			cmsCategoriesCtrl.categoryForm = undefined;
			cmsCategoriesCtrl.addOrEdit();
			
			//if categoryForm is defined should change action to 'add'
			expect(cmsCategoriesCtrl.action).toEqual('add');
		});
		
		it('test addOrEdit() method when categoryForm is undefined and index passed as parameter', function() {
			cmsCategoriesCtrl.categories = [
				{
					id: 0,
					name: 'Books'
				}
			];
			
			cmsCategoriesCtrl.categoryForm = undefined;
			cmsCategoriesCtrl.addOrEdit(cmsCategoriesCtrl.categories[0].id);
			
			//should create property action with value 'edit'
			expect(cmsCategoriesCtrl.categories[0].action).toEqual('edit');
			//tempCategory.name value should be the same as name property in categories array on index 0
			expect(cmsCategoriesCtrl.tempCategory.name).toEqual(cmsCategoriesCtrl.categories[0].name);
			expect(cmsCategoriesCtrl.action).toBeNull();
		});
		
		it('test cancelAddOrEdit() method when not passed parameter', function() {
			cmsCategoriesCtrl.cancelAddOrEdit();
			
			//tempCategory.name value should empty string
			expect(cmsCategoriesCtrl.tempCategory.name).toEqual('');
			expect(cmsCategoriesCtrl.action).toBeNull();
		});
		
		it('test cancelAddOrEdit() method when index passed as parameter', function() {
			cmsCategoriesCtrl.categories = [
				{
					id: 0,
					name: 'Books'
				}
			];
			cmsCategoriesCtrl.cancelAddOrEdit(cmsCategoriesCtrl.categories[0].id);
			
			//tempCategory.name value should empty string
			expect(cmsCategoriesCtrl.tempCategory.name).toEqual('');
			//action property in categories array on index 0 should be undefined
			expect(cmsCategoriesCtrl.categories[0].action).toBeUndefined();
		});
		
		it('test saveOrUpdate() method when categoryForm is not valid', function() {
			cmsCategoriesCtrl.categoryForm = {
				$valid: false
			};
			
			spyOn(categoriesFact, 'update');
			spyOn(categoriesFact, 'save');
			
			cmsCategoriesCtrl.saveOrUpdate();
			
			//should not have been called two method from categoriesFactory
			expect(categoriesFact.update).not.toHaveBeenCalled();
			expect(categoriesFact.save).not.toHaveBeenCalled();
		});
	});
});