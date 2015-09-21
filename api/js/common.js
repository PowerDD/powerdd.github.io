$(function() {

});

angular.module('powerdd', ['ngCookies']);
    function CookieCtrl($scope, $cookieStore) {
      $scope.lastVal = $cookieStore.get('tab');

      $scope.changeTab = function(tabName){
          $scope.lastVal = tabName;
          $cookieStore.put('tab', tabName);
      };
    }