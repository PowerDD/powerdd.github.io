$(function() {



});

angular.module("MyAPP",[],function($locationProvider){
    $locationProvider.html5Mode(true);
});

function MainController($location){
	var path = $location.path();

	console.log(path);

}