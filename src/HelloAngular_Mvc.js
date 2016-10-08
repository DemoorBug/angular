var myModule = angular.module("MyModule",["ngRoute","ngAnimate","MyModuleCtrl"]);
/*myModule.controller('HelloAngular',['$scope',function($scope){
    $scope.greeting={
        text:'Hello'
    }
}])*/
myModule.config(function($routeProvider){
    $routeProvider.when('/hello',{
        templateUrl: './list.html',
        controller: 'HelloAngular'
    }).otherwise({
        redirectTo: '/hello'
    })
})