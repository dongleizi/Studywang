var testApp=angular.module("testNg",[]);/*声明模块，包含两个参数：第一个是模块的名称，第二个是依赖列表、也就是可以被注入到模块中的对象列表*/
testApp.controller('myclock', function ($scope,$timeout) {/*$scope 作用域，在AngularJS中充当数据模型，并不负责处理和操作数据*/
    var updateClock=function(){
        $scope.clock=(new Date()).toLocaleString();
        $timeout(function () {
            updateClock();
        },1000);
    };
    updateClock();
    $scope.name="王子振";
});