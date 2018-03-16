angular.module('bookshop').controller('userPanelController', function() {
	this.init = function() {
		this.activeTab = 'data';
	}
	this.init();
	
	this.switchTab = function(tab) {
		this.activeTab = tab;
	}
});