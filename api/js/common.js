$(function() {

});

/*var myApp = angular.module('powerdd', ['ngCookies']);
myApp.controller('MyController', ['$scope', '$cookies', '$cookieStore', '$window', function($scope, $cookies, $cookieStore, $window) {
	$cookieStore.put('fruit', 'Apple');
	console.log( $cookieStore.get('fruit') );
}]);*/



var myApp = angular.module('powerdd', ['ngStorage']);

myApp.controller('MyController', function($scope, $localStorage) {
	$scope.$storage = $localStorage.$default({ authKey: '' });

	if ( $scope.$storage.authKey == '' ) {
		console.log('xxx');
	}
	else {
		console.log('yyy');
	}

});