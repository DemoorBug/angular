var myModuleCtrl = angular.module("MyModuleCtrl",[]);
myModuleCtrl.controller('HelloAngular',['$scope',function($scope){
    $scope.names= ['one','two','therr']
}])