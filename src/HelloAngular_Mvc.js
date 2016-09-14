var myModule = angular.module("MyModule",[]);
myModule.controller('MyCtrl',['$scope',function($scope){
    $scope.loadDate = function(){
        console.log("加载数据")
    }
}])
myModule.controller('MyCtrl2',['$scope',function($scope){
    $scope.loadDate2 = function(){
        console.log("加载数据2")
    }
}])
myModule.directive('loader',function(){
    return {
        restrict: "AE",
        link: function(scope,element,attrs){
            element.on('click',function(event){
                scope.$apply(attrs.howtoload)
            })
        }
    }
})