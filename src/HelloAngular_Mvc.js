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
})

myModule.controller('MyCtrl',['$scope',function($scope){
    $scope.loadData=function(){
        console.log("加载数据")
    }
}])
myModule.controller('MyCtrl2',['$scope',function($scope){
    $scope.loadData2=function(){
        console.log("加载数据21")
    }
}])

myModule.directive('loader',function(){
    return {
        restrict: "AE",
        link: function(scope,element,attrs){
            element.bind("mouseenter",function(){
                // scope.loadData();
                scope.$apply(attrs.howtoload)
            })
        }
    }
})