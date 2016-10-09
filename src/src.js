var myModuleCtrl = angular.module("MyModuleCtrl",[]);
myModuleCtrl.controller('HelloAngular',['$scope',function($scope){
    
    $scope.is='a'
}])
myModuleCtrl.controller('ListAngular',['$scope',function($scope){
    $scope.names= ['one','two','therr']
    $scope.pyte={
        name:"user"
    }
    $scope.is='b'
}])