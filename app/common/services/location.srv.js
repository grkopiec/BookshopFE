angular.module('bookshop').service('locationService', function($location) {
	this.goHome = function() {
		$location.url('/home');
	},
	this.goProducts = function() {
		$location.url('/products');
	}
	this.goCms = function() {
		$location.url('/cms');
	}
});