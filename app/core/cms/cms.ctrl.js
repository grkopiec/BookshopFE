angular.module('bookshop').controller('cmsController', function($scope) {
	this.switchTab = function(tab) {
		this.activeTab = tab;
	}
	
	this.activeTab = 'categories';
});