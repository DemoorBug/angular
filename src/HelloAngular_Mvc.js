var myModule = angular.module("MyModule",["ngRoute","ngAnimate","MyModuleCtrl"]);
/*myModule.controller('HelloAngular',['$scope',function($scope){
    $scope.greeting={
        text:'Hello'
    }
}])*/
myModule.config(function($routeProvider){
    $routeProvider.when('/hello',{
        templateUrl: './hello.html',
        controller: 'HelloAngular'
    }).when('/list',{
        templateUrl: './list.html',
        controller: 'ListAngular'
    })
    .otherwise({
        redirectTo: '/hello'
    })
})