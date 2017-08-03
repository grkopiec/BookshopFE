angular.module('bookshop').controller('cmsController', function($scope) {
	this.init = function() {
		this.activeTab = 'categories';
	}
	this.init();
	
	this.switchTab = function(tab) {
		this.activeTab = tab;
	}
});