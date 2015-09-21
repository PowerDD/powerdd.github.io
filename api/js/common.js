$(function() {

});

angular.module('powerdd', ['ngCookies']);
    function CookieCtrl($scope, $cookieStore) {
      $scope.lastVal = $cookieStore.get('auth');

	  console.log($cookieStore.get('auth'));

	  $cookieStore.put('auth', 'dddd');

      $scope.changeTab = function(tabName){
          $scope.lastVal = tabName;
          $cookieStore.put('tab', tabName);
      };
    }