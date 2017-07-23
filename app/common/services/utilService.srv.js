angular.module('bookshop').service('utilService', function(serverUrlValue) {
	this.calculateImagePath = function(imagePath) {
		return serverUrlValue + (imagePath === null ? '/bookshop/resources/noImage.png' : imagePath);
	}
});