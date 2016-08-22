/**
 * Created by Administrator on 2016/3/16.
 */
var ctrApp=angular.module("controllerApp",[]);
ctrApp.controller("controllerDemo", function ($scope,$interpolate) {
    $scope.person={name:"wangzizhen",age:"29",work:"FEED"}
    $scope.counter=25;
    $scope.add= function (num) { $scope.counter +=num; };
    $scope.subtract= function (num) {$scope.counter -=num; };
    $scope.$watch("customerName", function (newVal,oldVal,scope) {
        if(newVal){
            $scope.customerName=    newVal;

        }
    })
});
ctrApp.filter('reverseL',function () {
    return function (input) {
        if(input){
            var out=""
            for(var i=0;i<input.length;i++){
                out =input.charAt(i)+out
            }
            return out;
        }
    }
})
var AppServer={
    watchCustomer: function () {
        
    }
}